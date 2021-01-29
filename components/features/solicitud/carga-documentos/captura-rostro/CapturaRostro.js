import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Camera from '../../../../shared/camera/Camera';
import Modal from '../../../../shared/modal/Modal';

const CapturaRostro = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cameraRef = useRef();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState([]);
  const [isCaptureComplete, setCaptureComplete] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    const response = await fetch('https://mobileauth.aware-demos.com/knomi/autocapture', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Access-Control-Allow-Origin': '192.168.5.4:3000',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Expose-Headers': '*',
        'Content-Type': 'text/plain; charset=utf-8'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(payload) // body data type must match "Content-Type" header
    });
    return response.json();
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

    const response = await fetch('https://mobileauth.aware-demos.com/knomi/analyze', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Access-Control-Allow-Origin': '192.168.5.4:3000',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Expose-Headers': '*',
        'Content-Type': 'text/plain; charset=utf-8'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(payload) // body data type must match "Content-Type" header
    });
    return response.json();
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
        setCaptureComplete(true);
      } else {
        setAnalysisMessage(['Por favor, inténtelo de nuevo']);
      }
    } catch (error) {
      setAnalysisMessage(['Por favor, inténtelo de nuevo']);
    }
  };

  const onCapture = async () => {
    const frame1 = cameraRef.current.onCapture();
    const frame2 = cameraRef.current.onCapture();
    const frame3 = cameraRef.current.onCapture();
    const autoCaptureRes = await analyzeAutoCapture(frame1);
    if (autoCaptureRes) {
      checkForLiveness([frame1, frame2, frame3]);
    }
  };

  const onClear = () => {
    cameraRef.current.onClear();
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
              <button type="submit" className="btn-medium" onClick={() => onCapture()}>
                Tomar foto
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default CapturaRostro;
