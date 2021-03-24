import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import KnomiRepositorio from '../../../../../../services/solicitud/knomi.repositorio';
import Modal from '../../../../../shared/modal/Modal';
import Camera from '../../../../../shared/camera/Camera';
import { PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';
import SvgCapturaExitosa from '../../../../../svgs/carga-documentos/SvgCapturaExitosa';
import knomiFeedbackMessages from '../../../../../../constants/knomiFeedback';

const CapturaRostroBiometricosDocumentacion = () => {
  const cameraRef = useRef();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState([]);
  const [isCaptureComplete, setCaptureComplete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isTakingPicture, setTakingPicture] = useState(false);
  const [pauseImage, setPauseImage] = useState(false);

  const getResponseAutoCapture = async (frame) => {
    const payload = {
      preface: {
        profile: {
          name: 'knomi_charlie_server.xml',
        },
        rotation: 0,
        frames: [frame],
        resolutionPreview: {
          width: 480 / 2,
          height: 640 / 2,
        },
        resolutionCapture: {
          width: 480,
          height: 640,
        },
      },
    };
    return KnomiRepositorio.postAutoCapture(payload);
  };

  const getResponseAnalyze = async (frames) => {
    const payload = {
      video: {
        workflow_data: {
          workflow: 'charlie4',
          rotation: 0,
          frames: frames,
        },
        meta_data: {
          client_device_brand: navigator.platform === 'iPhone' ? 'Apple' : navigator.platform,
          username: 'teste',
          client_version: navigator.userAgent,
        },
      },
    };
    return KnomiRepositorio.postAnalyze(payload);
  };

  const processMessage = (feedback) => {
    for (let index = 0; index < feedback.length; index++) {
      const element = feedback[index];
      if (knomiFeedbackMessages[element]) {
        feedback[index] = knomiFeedbackMessages[element];
      }
    }
    return feedback;
  };

  const analyzeAutoCapture = async (rawImgData) => {
    const frame = {
      data: rawImgData.analyzer.replace('data:image/jpeg;base64,', ''),
      tags: [],
      timestamp: rawImgData.timestamp,
    };

    try {
      const response = await getResponseAutoCapture(frame);
      if ('error' in response.data.preface) {
        throw response.data.preface.error;
      }
      const feedback = processMessage(response.data.preface.frameResults[0].feedback);
      setAnalysisMessage(feedback);
      if (response.data.preface.results.captured) {
        return true;
      }
    } catch (error) {
      setAnalysisMessage([error.description]);
    }
    return false;
  };

  const checkForLiveness = async (rawImgsData) => {
    const frames = rawImgsData.map((item) => ({
      data: item.liveness.replace('data:image/jpeg;base64,', ''),
      tags: [],
      timestamp: item.timestamp,
    }));
    try {
      const response = await getResponseAnalyze(frames);
      if (response.data.video.liveness_result.score === 100) {
        setPauseImage(true);
        setCaptureComplete(true);
      } else {
        setAnalysisMessage(['Por favor, inténtelo de nuevo']);
        setPauseImage(false);
        setCaptureComplete(false);
      }
    } catch (error) {
      setAnalysisMessage(['Por favor, inténtelo de nuevo']);
      setPauseImage(false);
      setCaptureComplete(false);
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const captureFramesLoop = async () => {
    const frames = [];
    const pushFrame = (frame) => {
      frames.push(frame);
      if (frames.length > 3) {
        frames.shift();
      }
    };
    let takingPicture = true;
    let countTimeout = 0;
    /* eslint-disable no-await-in-loop */
    // TODO: Reemplazar por setInterval
    // https://stackoverflow.com/questions/16599878/can-clearinterval-be-called-inside-setinterval/16599921
    while (takingPicture) {
      const frame = cameraRef.current.onCapture();
      pushFrame(frame);
      const autoCaptureRes = await analyzeAutoCapture(frame);
      await sleep(500);
      if (autoCaptureRes && frames.length === 3) {
        return { autoCaptureRes, frames };
      }
      countTimeout += 1;
      if (countTimeout === 15) {
        takingPicture = false;
      }
    }
    /* eslint-enable no-await-in-loop */
    return { autoCaptureRes: false };
  };

  const onCapture = async () => {
    setTakingPicture(true);
    const { autoCaptureRes, frames } = await captureFramesLoop();
    setTakingPicture(false);
    if (autoCaptureRes) {
      checkForLiveness(frames);
    } else {
      setAnalysisMessage(['Por favor, inténtelo de nuevo']);
      setPauseImage(false);
    }
  };

  const onClear = () => {
    cameraRef.current.onClear();
    setPauseImage(false);
    setCaptureComplete(false);
  };

  useEffect(() => {
    setIsCameraOpen(true);
  }, []);

  return (
    <div className="container-fluid">
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div>
          <div className="col-xs-12 col-sm-12 my-3">
            <div className="mx-auto">
              <SvgCapturaExitosa />
            </div>
          </div>
          <h4 className="color-blue-storm">¡Captura exitosa!</h4>
          <p className="dark-gray body2">Tus biométricos fueron capturados.</p>
          <div className="flex-row-center-config">
            <Link href={PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE}>
              <button type="submit" className="btn-medium">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <div className="row">
        <div className="col-12 p-0">
          {isCameraOpen && <Camera ref={cameraRef} isCaptureComplete={isCaptureComplete} pauseImage={pauseImage} />}
        </div>
      </div>
      {isCaptureComplete ? (
        <>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h4 className="color-blue-storm">¿Quedó bien tu fotografía?</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="body2">La fotografía debe ser clara y no movida.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button type="button" className="btn-medium" onClick={() => setOpenModal(true)}>
                Guardar foto
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <span className="link" role="button" tabIndex={0} onClick={() => onClear()}>
                Tomar otra foto
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h4 className="color-blue-storm">Foto de rostro</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="body2">
                Captura tu rostro dentro del espacio señalado.
                <br />
                Por favor, procura que la imagen no esté borrosa ni cortada.
              </p>
              {analysisMessage &&
                analysisMessage
                  .map((item) => item)
                  .reduce((acc, _x) => (acc === null ? [_x] : [acc, <br />, _x]), null)}
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <button type="submit" className="btn-medium" onClick={() => onCapture()} disabled={isTakingPicture}>
                Tomar foto
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CapturaRostroBiometricosDocumentacion;
