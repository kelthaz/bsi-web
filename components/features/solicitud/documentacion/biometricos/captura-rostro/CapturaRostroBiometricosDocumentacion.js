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
  const intervalRef = useRef();

  const [openModalError, setOpenModalError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState('');
  const [isCaptureComplete, setCaptureComplete] = useState(false);
  const [pauseImage, setPauseImage] = useState(false);
  const [cameraStatus, setCameraStatus] = useState('normal');

  const capturedFrames = [];
  const feebackFrames = [];

  const analyzeAutoCapture = async (rawImgData) => {
    const frameAnalyzer = {
      data: rawImgData.analyzer.replace('data:image/jpeg;base64,', ''),
      tags: [],
      timestamp: rawImgData.timestamp,
    };

    const payload = {
      preface: {
        profile: {
          name: 'knomi_charlie_server.xml',
        },
        rotation: 0,
        frames: [frameAnalyzer],
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

    const {
      captured,
      frameResult: { feedback },
    } = await KnomiRepositorio.postAutoCapture(payload)
      .then(({ data }) => ({ captured: data.preface.results.captured, frameResult: data.preface.frameResults[0] }))
      .catch(() => ({ captured: false, frameResult: ['AWARE_INTERNAL_ERROR_1'] }));

    if (captured) {
      setCameraStatus('captured');
      setAnalysisMessage('');
      capturedFrames.push(frameAnalyzer);
      feebackFrames.length = 0;
    } else {
      const [firstFeedback] = feedback;
      setCameraStatus('error');
      setAnalysisMessage(firstFeedback ? knomiFeedbackMessages[firstFeedback] : '');
      feebackFrames.push(knomiFeedbackMessages[firstFeedback] === knomiFeedbackMessages.NO_FACE_DETECTED);
    }
  };

  const checkForLiveness = async () => {
    const payload = {
      video: {
        workflow_data: {
          workflow: 'charlie4',
          rotation: 0,
          frames: capturedFrames,
        },
        meta_data: {
          client_device_brand: navigator.platform === 'iPhone' ? 'Apple' : navigator.platform,
          username: 'teste',
          client_version: navigator.userAgent,
        },
      },
    };

    const isAlive = await KnomiRepositorio.postAnalyze(payload)
      .then(({ data }) => data.video.liveness_result.score === 100)
      .catch(() => false);

    return isAlive;
  };

  const checkIsAlive = async () => {
    setPauseImage(true);
    const isAlive = await checkForLiveness();
    setCameraStatus('normal');

    if (isAlive) {
      setCaptureComplete(true);
      setOpenModal(true);
    } else {
      openModalError(true);
      setPauseImage(false);
      capturedFrames.length = 0;
    }
  };

  const stopAutoCapture = () => clearInterval(intervalRef.current);

  const autoCapture = async () => {
    const frame = cameraRef.current.onCapture();
    await analyzeAutoCapture(frame);
  };

  const cancelAutoCapture = () => {
    stopAutoCapture();
    setTimeout(() => {
      setCameraStatus('cancel');
      setAnalysisMessage('');
    }, 600);
  };

  const startAutoCapture = () => {
    const interval = setInterval(() => {
      if (capturedFrames.length >= 3) {
        stopAutoCapture();
        checkIsAlive();
      } else if (feebackFrames.length >= 20 && feebackFrames.every(Boolean)) {
        cancelAutoCapture();
      } else {
        autoCapture();
      }
    }, 500);
    intervalRef.current = interval;
  };

  const returnCurrentButton = () => {
    switch (cameraStatus) {
      case 'normal':
        return (
          <button type="submit" className="btn-medium" onClick={startAutoCapture}>
            Tomar foto
          </button>
        );

      case 'cancel':
        return (
          <button type="submit" className="btn-medium" onClick={startAutoCapture}>
            Reanudar
          </button>
        );

      default:
        return (
          <button type="submit" className="btn-medium" onClick={cancelAutoCapture}>
            Cancelar
          </button>
        );
    }
  };

  useEffect(() => {
    setIsCameraOpen(true);
  }, []);

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal} closeable={false}>
        <div>
          <div className="d-flex justify-content-center my-3">
            <SvgCapturaExitosa />
          </div>
          <h4 className="color-blue-storm">¡Captura exitosa!</h4>
          <p className="dark-gray body2">Tus biométricos fueron capturados.</p>
          <div className="d-flex justify-content-center">
            <Link href={PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE}>
              <button type="submit" className="btn-medium">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <Modal openModal={openModalError} setOpenModal={setOpenModalError}>
        <div>
          <h4 className="color-blue-storm">¡Oh, no!</h4>
          <p className="dark-gray body2">Es necesario volver a tomar la foto.</p>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn-medium" onClick={startAutoCapture}>
              Tomar foto
            </button>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed d-flex flex-column justify-content-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              {isCameraOpen && (
                <Camera
                  ref={cameraRef}
                  isCaptureComplete={isCaptureComplete}
                  pauseImage={pauseImage}
                  cameraStatus={cameraStatus}
                  cameraMsg={analysisMessage}
                >
                  {!isCaptureComplete && returnCurrentButton()}
                </Camera>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapturaRostroBiometricosDocumentacion;
