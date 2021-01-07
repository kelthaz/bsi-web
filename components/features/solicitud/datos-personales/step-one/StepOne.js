import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import ModalActualizar from '../../../../core/modals/solicitud/modal-actualizar/ModalActualizar';

const StepOne = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      primerNombre: datosPersonales.primerNombre,
      segundoNombre: datosPersonales.segundoNombre,
      primerApellido: datosPersonales.primerApellido,
      segundoApellido: datosPersonales.segundoApellido,
    },
    validationSchema: Yup.object().shape({
      primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      segundoNombre: Yup.string().max(60, longitudMaxima),
      primerApellido: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      segundoApellido: Yup.string().max(60, longitudMaxima),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-personales', step: '2' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
    },
  });

  const { openModal, setOpenModal, handleSubmit } = useOnChangePage(
    formulario,
    '/solicitud/datos-personales/2',
    currentStep
  );

  return (
    <>
      <ModalActualizar formulario={formulario} openModal={openModal} setOpenModal={setOpenModal} />
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="color-blue-storm">Para comenzar</h2>
              <p className="color-dark-gray sub">Cuéntanos, ¿Cómo te llamas?</p>

              <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi nombre es</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    format="uppercase"
                    name="primerNombre"
                    maxlength={60}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Nombre"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <TextField
                    name="segundoNombre"
                    format="uppercase"
                    maxlength={60}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Nombre"
                    optional
                  />
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    format="uppercase"
                    name="primerApellido"
                    maxlength={60}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Apellido paterno"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <TextField
                    format="uppercase"
                    maxlength={60}
                    name="segundoApellido"
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Apellido materno"
                  />
                </div>
              </div>
              <div className="row no-gutters card-simple-blue-light text-md-center ">
                <p>
                  Favor de llenar los campos con los nombres y apellidos presentados en tu Identificación oficial INE
                </p>
              </div>
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  // onClick={() => formulario.handleSubmit()}
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!formulario.isValid}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepOne;
