import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Camera from '../../../../shared/camera/Camera';
import Modal from '../../../../shared/modal/Modal';
import KnomiRepositorio from '../../../../../services/solicitud/knomi.repositorio';

const CapturaRostro = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cameraRef = useRef();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState([]);
  const [isCaptureComplete, setCaptureComplete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [takePhotoStatus, setTakePhotoStatus] = useState('Tomar foto');
  const [isTakingPicture, setTakingPicture] = useState(false);
  const [pauseImage, setPauseImage] = useState(false);


  const { initialValues, validationSchema } = {
    initialValues: {},
    validationSchema: Yup.object().shape({}),
  };

  const knomiFeedbackMessages = {
    'NO_FACE_DETECTED': 'No se detecta un rostro',
    'FACE_ON_LEFT': 'Rostro a la izquierda',
    'FACE_ON_RIGHT': 'Rostro a la derecha',
    'FACE_TOO_HIGH': 'Rostro muy alto',
    'FACE_TOO_LOW': 'Rostro muy bajo',
    'RIGHT_EYE_CLOSED': 'Ojo derecho cerrado',
    'LEFT_EYE_CLOSED': 'Ojo izquierdo cerrado',
    'INVALID_POSE': 'Pose inválida',
    'FACE_TOO_FAR':  'Rostro muy lejos'
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '3' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/4');
    },
  });

  const getResponseAutoCapture = async (frame) => {
    const payload = {
      'preface': {
        'profile': {
          'name': 'knomi_charlie_server.xml'
        },
        'rotation': 0,
        'frames': [frame],
        'resolutionPreview': {
          'width': 480 / 2,
          'height': 640 / 2
        },
        'resolutionCapture': {
          'width': 480,
          'height': 640
        }
      }
    };
    return KnomiRepositorio.postAutoCapture(payload).data;
  };

  const getResponseAnalyze = async (frames) => {
    const payload = {
      'video': {
        'workflow_data': {
          'workflow': 'charlie4',
          'rotation': 0,
          'frames': frames
        },
        'meta_data': {
          'client_device_brand': navigator.platform === 'iPhone' ? 'Apple' : navigator.platform,
          'username': 'teste',
          'client_version': navigator.userAgent,
        }
      }
    };
    return KnomiRepositorio.postAnalyze(payload).data;
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
      'data': rawImgData.image.replace('data:image/jpeg;base64,', ''),
      'tags': [],
      'timestamp': rawImgData.timestamp
    };

    try {
      const response = await getResponseAutoCapture(frame);
      if ('error' in response.preface) {
        throw response.preface.error;
      }
      const feedback = processMessage(response.preface.frameResults[0].feedback);
      setAnalysisMessage(feedback);
      if (response.preface.results.captured) {
        return true;
      }
    } catch (error) {
      setAnalysisMessage([error.description]);
    }
    return false;
  };

  const checkForLiveness = async (rawImgsData) => {
    const frames = rawImgsData.map((item) => ({
      'data': item.image.replace('data:image/jpeg;base64,', ''),
      'tags': [],
      'timestamp': item.timestamp
    }));
    try {
      const response = await getResponseAnalyze(frames);
      if (response.video.liveness_result.score === 100) {
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

  const onCapture = async () => {
    const frames = [];
    setTakingPicture(true);
    /* eslint-disable no-await-in-loop */
    for (let index = 3; index > 0; index--) {
      setTakePhotoStatus(index);
      frames.push(cameraRef.current.onCapture());
      await sleep(500);
    }
    /* eslint-enable no-await-in-loop */
    setPauseImage(true);
    setTakePhotoStatus('Tomar foto');
    setTakingPicture(false);
    const autoCaptureRes = await analyzeAutoCapture(frames[2]);
    if (autoCaptureRes) {
      checkForLiveness(frames);
    } else {
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
          <h4 className="color-blue-storm">¡Captura exitosa!</h4>
          <p className="dark-gray body2">
            Tus biométricos fueron capturados.
          </p>
          <div className="flex-row-center-config">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/3" replace>
              <button type="submit" className="btn-medium">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <div className="row">
        <div className="col-12 p-0">
          {isCameraOpen &&
            <Camera
              ref={cameraRef}
            isCaptureComplete={isCaptureComplete}
            pauseImage={pauseImage}
            />
          }
        </div>
      </div>
      {isCaptureComplete ?
        <>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h4 className="color-blue-storm">¿Quedó bien tu fotografía?</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="body2">
                La fotografía debe ser clara y no movida.
              </p>
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
        :
        <>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h4 className="color-blue-storm">Foto de rostro</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="body2">
                Captura tu rostro dentro del espacio señalado.<br />
                Por favor, procura que la imagen no esté borrosa ni cortada.
              </p>
              {analysisMessage &&
                analysisMessage
                  .map((item) => item)
                  .reduce((acc, _x) => acc === null ? [_x] : [acc, <br />, _x], null)
              }
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <button type="submit" className="btn-medium" onClick={() => onCapture()} disabled={isTakingPicture}>
                { takePhotoStatus }
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default CapturaRostro;
