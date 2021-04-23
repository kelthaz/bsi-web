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
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';
import validateEmail from '../../../../../../helpers/validations/validationEmail';
import ObligadoSolidiarioRepositorio from '../../../../../../services/solicitud/obligadoSolidiario.repositorio';

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

  const isValid = async () => {
    const [emailExist, error] = await validateEmail(formulario.values.correo);

    if (!emailExist) {
      formulario.setFieldError('correo', error);
      return emailExist;
    }

    const personData = {
      ...formulario.values,
      tipoPersona: documentacion.obligadoSolidario.tipoPersona,
    };

    const validPerson = await ObligadoSolidiarioRepositorio.postObligadoSolidiario(personData)
      .then(() => true)
      .catch(() => false);

    return validPerson;
  };

  const [handleSubmit] = useOnChangePage(formulario, AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE, currentStep, isValid);

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
                  <p className="input color-gray">Su nombre es</p>
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="primerNombre"
                    format="uppercase"
                    maxlength={60}
                    type="text"
                    size="big"
                    label="Nombre"
                    {...formulario.getFieldMeta('primerNombre')}
                    {...formulario.getFieldHelpers('primerNombre')}
                  />
                </div>
                <div className="col-lg-4 col-md-4  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="segundoNombre"
                    format="uppercase"
                    maxlength={60}
                    type="text"
                    size="big"
                    label="Nombre"
                    optional
                    {...formulario.getFieldMeta('segundoNombre')}
                    {...formulario.getFieldHelpers('segundoNombre')}
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="primerApellido"
                    format="uppercase"
                    maxlength={60}
                    type="text"
                    size="big"
                    label="Apellido paterno"
                    {...formulario.getFieldMeta('primerApellido')}
                    {...formulario.getFieldHelpers('primerApellido')}
                  />
                </div>
                <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 ">
                  <TextField
                    name="segundoApellido"
                    format="uppercase"
                    maxlength={60}
                    type="text"
                    size="big"
                    label="Apellido materno"
                    {...formulario.getFieldMeta('segundoApellido')}
                    {...formulario.getFieldHelpers('segundoApellido')}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Su correo es</p>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 ">
                  <TextField
                    name="correo"
                    size="big"
                    label="correo@mail.com"
                    maxlength={100}
                    type="email"
                    format="email"
                    {...formulario.getFieldMeta('correo')}
                    {...formulario.getFieldHelpers('correo')}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Su teléfono es</p>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 ">
                  <TextField
                    name="celular"
                    type="tel"
                    size="big"
                    label="55-9999-9999"
                    format="phone"
                    maxlength={12}
                    {...formulario.getFieldMeta('celular')}
                    {...formulario.getFieldHelpers('celular')}
                  />
                </div>
              </div>
              <div className="row no-gutters card-simple-blue-light text-md-center ">
                <p className="m-0">
                  Favor de llenar los campos con los nombres y apellidos presentados de su Identificación oficial INE
                </p>
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
