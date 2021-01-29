import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Camera from '../../../../shared/camera/Camera';
import Modal from '../../../../shared/modal/Modal';

const CapturaINE = () => {
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

  const onCapture = async () => {
    const frame1 = cameraRef.current.onCapture();
    setOpenModal(true);
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
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/2" replace>
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
              <h4 className="color-blue-storm">Foto de frente</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="body2">
                Captura tu INE dentro del espacio señalado.<br />
                Por favor, procura que la imagen no esté borrosa ni cortada.
              </p>
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

export default CapturaINE;
