/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import useFindCodigoPostal from '../../../../../hooks/useFindCodigoPostal';
import Select from '../../../../shared/select/Select';
import { campoRequerido, longitudMaxima, codigoPostalInvalido, seleccionOpcion } from '../../../../../constants/errors';

const StepOne = () => {
  const { pfae } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      calle: pfae.domicilioFiscal.calle,
      numExterior: pfae.domicilioFiscal.numExterior,
      numInterior: pfae.domicilioFiscal.numInterior,
      codigoPostal: pfae.domicilioFiscal.codigoPostal,
      colonia: pfae.domicilioFiscal.colonia,
      municipioAlcaldia: pfae.domicilioFiscal.municipioAlcaldia,
      ciudad: pfae.domicilioFiscal.ciudad,
      estado: pfae.domicilioFiscal.estado,
    },
    validationSchema: Yup.object({
      calle: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      numExterior: Yup.string().max(6, longitudMaxima).required(campoRequerido),
      numInterior: Yup.string().max(6, longitudMaxima),
      codigoPostal: Yup.string().min(5, codigoPostalInvalido).max(5, longitudMaxima).required(campoRequerido),
      colonia: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      municipioAlcaldia: Yup.string(),
      ciudad: Yup.string(),
      estado: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '2' },
          pfae: {
            ...pfae,
            ...values,
          },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/2');
    },
  });

  const [colonias] = useFindCodigoPostal(
    formulario,
    'codigoPostal',
    'colonia',
    'municipioAlcaldia',
    'ciudad',
    'estado'
  );

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                Alejandra ya nos ha platicado un poco sobre ti, por lo que te pediremos información adicional para
                completar tu expediente y habremos terminado.
              </p>
              <p className="color-dark-gray sub">Para comenzar, por favor compártenos tu domicilio.</p>
              <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                  <TextField
                    name="calle"
                    maxlength={60}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Calle"
                    format="alphanumeric"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                  <TextField
                    name="numExterior"
                    maxlength={6}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="#"
                    format="alphanumeric"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                  <TextField
                    name="numInterior"
                    maxlength={6}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Int."
                    format="alphanumeric"
                  />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                  <TextField
                    name="codigoPostal"
                    maxlength={5}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="C.P"
                    format="number"
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Select
                    name="colonia"
                    maxlength={120}
                    formulario={formulario}
                    type="text"
                    size="big"
                    items={colonias}
                    label="Colonia"
                    disabled={colonias.length === 0}
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    name="municipioAlcaldia"
                    maxlength={50}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Municipio/Alcaldía"
                    readonly
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <TextField
                    name="ciudad"
                    maxlength={50}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Ciudad"
                    readonly
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <TextField
                    name="estado"
                    maxlength={50}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Estado"
                    readonly
                  />
                </div>
              </div>
              <div className="flex-column-center-config">
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
    </>
  );
};
export default StepOne;
