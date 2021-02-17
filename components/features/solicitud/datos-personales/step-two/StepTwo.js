import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { seleccionOpcion } from '../../../../../constants/errors';
import { PASO_TRES_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';

const StepTwo = () => {
  const personaFisica = { value: 'FISICA', label: 'Persona Física con Actividad Empresarial' };
  const personaMoral = { value: 'MORAL', label: 'Persona Moral' };
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      tipoPersona: datosPersonales.tipoPersona,
    },
    validationSchema: Yup.object().shape({
      tipoPersona: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'datos-personales', step: '3' } : { ...currentStep },
          datosPersonales: {
            ...datosPersonales,
            ...values,
          },
        })
      );
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleTipoPersona = async (tipoPersona) => {
    await setFieldValue('tipoPersona', tipoPersona);
    if (!touched.tipoPersona) {
      await setFieldTouched('tipoPersona', true);
    }
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_TRES_DATOS_PERSONA_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="color-blue-storm text-overflow">¡Hola, {datosPersonales.primerNombre}!</h2>
            <p className="color-dark-gray sub">Conozcámonos un poco más, ¿Qué tipo de persona eres?</p>

            <div className="row my-3">
              <div className="col-lg-6 col-md-6 col-sm-12 pl-lg-5 pl-md-5 col-xs-12 mb-sm-2 mb-xs-2">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.tipoPersona && values.tipoPersona.value === personaFisica.value && 'card-selected-blue-sky'
                  }`}
                  onClick={() => handleTipoPersona(personaFisica)}
                >
                  <div>
                    <SvgPersonaFisicaActividadFisica />
                  </div>
                  <p className="px-md-5 px-lg-5">{personaFisica.label}</p>
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.tipoPersona && values.tipoPersona.value === personaMoral.value && 'card-selected-blue-sky'
                  }`}
                  onClick={() => handleTipoPersona(personaMoral)}
                >
                  <div>
                    <SvgPersonaMoral />
                  </div>

                  <p>{personaMoral.label}</p>
                </button>
              </div>
            </div>
            <p className="color-gray-dark sub">
              <span>¿Eres persona física? ¡Adquiere tu crédito en </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html"
                className="link"
              >
                BanCoppel Personas!
              </a>
            </p>
            <div className="flex-column-center-config">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={validate && !(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
