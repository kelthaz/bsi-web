import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { numeroInvalido, campoRequerido, ingreseOpcion } from '../../../../../constants/errors';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';

const StepFour = () => {
  const { datosEmpresa, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } =
    datosPersonales.tipoPersona === 'Persona Moral'
      ? {
          initialValues: {
            telefonoEmpresa: datosEmpresa.telefonoEmpresa,
          },
          validationSchema: Yup.object().shape({
            telefonoEmpresa: Yup.string().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
          }),
        }
      : {
          initialValues: {
            telefonoEmpresa: datosEmpresa.telefonoEmpresa,
            noTengoTelefonoEmpresa: datosEmpresa.noTengoTelefonoEmpresa,
          },
          validationSchema: Yup.object().shape(
            {
              telefonoEmpresa: Yup.string().when('noTengoTelefonoEmpresa', {
                is: false,
                then: Yup.string().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
                otherwise: Yup.string().notRequired(),
              }),

              noTengoTelefonoEmpresa: Yup.boolean().when('telefonoEmpresa', {
                is: (phone) => !phone || phone.length === 0,
                then: Yup.boolean().oneOf([true], ingreseOpcion),
                otherwise: Yup.boolean().notRequired(),
              }),
            },

            [['telefonoEmpresa', 'noTengoTelefonoEmpresa']]
          ),
        };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      values.telefonoEmpresa = values.noTengoTelefonoEmpresa ? '' : values.telefonoEmpresa;
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '5' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/5');
    },
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              ¿Cuál es el teléfono de tu empresa?
              <Tooltip message="Favor de compartir el teléfono fijo de tu negocio." />
            </p>
            <div className="row no-gutters">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Nos pueden contactar al</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="telefonoEmpresa"
                  formulario={formulario}
                  type="tel"
                  size="big"
                  label="55-9999-9999"
                  format="phone"
                  maxlength={12}
                />
              </div>
            </div>
            {datosPersonales.tipoPersona !== 'Persona Moral' && (
              <div className="row">
                <CheckTextBox name="noTengoTelefonoEmpresa" formulario={formulario}>
                  <p className="m-0">No tengo número de empresa, solo el personal.</p>
                </CheckTextBox>
              </div>
            )}
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StepFour;
