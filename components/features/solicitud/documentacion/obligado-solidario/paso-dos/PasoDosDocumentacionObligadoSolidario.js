/* eslint-disable complexity */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Modal from '../../../../../shared/modal/Modal';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import TextField from '../../../../../shared/text-field/TextField';
import { campoRequerido, longitudMaxima, numeroInvalido, correoInvalido } from '../../../../../../constants/errors';
import SvgEnviado from '../../../../../svgs/SvgEnviado';
import EmailageRepositorio from '../../../../../../services/solicitud/emailage.repositorio';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const PasoDosDocumentacionObligadoSolidario = ({ validate }) => {
  const { documentacion, currentStep } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      primerNombre: documentacion.obligadoSolidario.primerNombre,
      segundoNombre: documentacion.obligadoSolidario.segundoNombre,
      primerApellido: documentacion.obligadoSolidario.primerApellido,
      segundoApellido: documentacion.obligadoSolidario.segundoApellido,
      correo: documentacion.obligadoSolidario.correo,
      celular: documentacion.obligadoSolidario.celular,
    },
    validationSchema: Yup.object().shape({
      primerNombre: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      segundoNombre: Yup.string().max(60, longitudMaxima),
      primerApellido: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      segundoApellido: Yup.string().max(60, longitudMaxima),
      correo: Yup.string().email(correoInvalido).required(campoRequerido),
      celular: Yup.string().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, obligadoSolidario: { ...documentacion.obligadoSolidario, ...values } },
        })
      );
    },
  });

  const validateEmail = async () => {
    if (!formulario.errors.correo) {
      const emailScore = await EmailageRepositorio.postEmailScore(formulario.values.correo)
        .then((resp) => resp.data.fraudRisk.split(' ')[0])
        .catch(() => 801);
      if (emailScore >= 800) {
        formulario.setFieldError('correo', 'El correo no existente, favor de corregirlo.');
        return false;
      }
      // setOpenConfirmation(true);
    }
    return true;
  };

  const [handleSubmit] = useOnChangePage(
    formulario,
    AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE,
    currentStep,
    validateEmail
  );

  return (
    <>
      <Modal closeable={false} openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className="container px-xs-0 px-md-0">
          <div className="d-flex justify-content-center pb-4">
            <SvgEnviado />
          </div>
          <div>
            <h4 className="color-blue-storm">¡Invitación enviada!</h4>
            <p className="dark-gray body2">
              Hemos enviado un correo a tu obligado solidario
              <br />
              {formulario.values.primerNombre}.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link href={AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE}>
              <button className="btn-medium" type="submit" aria-label="Avanzar">
                <span>Continuemos</span>
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="color-blue-storm">¡Anotado!</h2>
              <p className="color-dark-gray sub">
                También requerimos que tu Obligado Solidario realice un proceso similar al tuyo, por lo que te pedimos
                nos compartas sus datos para invitarle.
              </p>

              <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi nombre es</p>
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="primerNombre"
                    format="uppercase"
                    maxlength={12}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Nombre"
                  />
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 ">
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
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="primerApellido"
                    format="uppercase"
                    maxlength={20}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Apellido paterno"
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="segundoApellido"
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
                <div className="col-lg-6 col-md-6 col-xs-12 ">
                  <TextField
                    name="correo"
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
                <div className="col-lg-6 col-md-6 col-xs-12 ">
                  <TextField
                    name="celular"
                    formulario={formulario}
                    type="tel"
                    size="big"
                    label="55-9999-9999"
                    format="phone"
                    maxlength={12}
                  />
                </div>
              </div>
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="btn-big flex-align-self-center my-3"
                  disabled={validate && !(formulario.isValid && formulario.dirty)}
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

PasoDosDocumentacionObligadoSolidario.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoDosDocumentacionObligadoSolidario;
