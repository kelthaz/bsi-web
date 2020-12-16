/* eslint-disable complexity */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Modal from '../../../shared/modal/Modal';
import styles from '../datos-empresa/step-nine/StepNine.module.scss';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import TextField from '../../../shared/text-field/TextField';
import { campoRequerido, longitudMaxima, numeroInvalido, correoInvalido } from '../../../../constants/errors';
import SvgEnviado from '../../../svgs/SvgEnviado';

const StepTwo = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      primerNombreDoc: datosEmpresa.primerNombreRecibe,
      segundoNombreDoc: datosEmpresa.segundoNombreRecibe,
      primerApellidoDoc: datosEmpresa.primerApellidoRecibe,
      segundoApellidoDoc: datosEmpresa.segundoApellidoRecibe,
      correoDoc: datosEmpresa.correoDoc,
      celularDoc: datosEmpresa.celularRecibe,
    },
    validationSchema: Yup.object().shape({
      primerNombreDoc: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      segundoNombreDoc: Yup.string().max(60, longitudMaxima),
      primerApellidoDoc: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      segundoApellidoDoc: Yup.string().max(60, longitudMaxima),
      correoDoc: Yup.string().trim().email(correoInvalido).required(campoRequerido),
      celularDoc: Yup.string().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: 'revisar-correo' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/revisar-correo');
    },
    validateOnMount: true,
  });

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className="container px-xs-0 px-md-0">
          <div className="d-flex justify-content-center pb-4">
            <SvgEnviado />
          </div>
          <div>
            <h4 className="color-blue-storm">¡Invitación enviada!</h4>
            <p className="dark-gray body2">
              Hemos enviado un correo a tu obligado solidario
              <br />
              {datosEmpresa.primerNombreRecibe}.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/documentacion/3">
              <button className="btn-medium" type="submit" aria-label="Avanzar">
                <span>Continuar</span>
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0 mt-5">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <h2 className="color-blue-storm">¡Anotado!</h2>
              <p className="color-dark-gray sub">
                También requerimos que tu Obligado Solidario realice un proceso similar al tuyo, por lo que te pedimos
                nos compartas sus datos para invitarle.
              </p>

              <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi nombre es</p>
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                  <TextField
                    name="primerNombreDoc"
                    format="uppercase"
                    maxlength={12}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Nombre"
                  />
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                  <TextField
                    name="segundoNombreDoc"
                    format="uppercase"
                    maxlength={60}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Nombre"
                    optional
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                  <TextField
                    name="primerApellidoDoc"
                    format="uppercase"
                    maxlength={20}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Apellido paterno"
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                  <TextField
                    name="segundoApellidoDoc"
                    format="uppercase"
                    formulario={formulario}
                    maxlength={20}
                    type="text"
                    size="big"
                    label="Apellido materno"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Su correo es</p>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 pb-sm-3 pb-xs-3">
                  <TextField
                    name="correoDoc"
                    formulario={formulario}
                    size="big"
                    label="correo@mail.com"
                    type="email"
                    format="email"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Su teléfono es</p>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 pb-sm-3 pb-xs-3">
                  <TextField
                    name="celularDoc"
                    formulario={formulario}
                    type="tel"
                    size="big"
                    label="55-9999-9999"
                    format="phone"
                    maxlength={12}
                  />
                </div>
              </div>
              <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
                <button
                  type="button"
                  className="btn-big flex-align-self-center my-3"
                  disabled={!(formulario.isValid && formulario.dirty)}
                  onClick={() => setOpenConfirmation(true)}
                >
                  Notificar al obligado
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
