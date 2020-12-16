import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { campoRequerido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextArea from '../../../../shared/text-area/TextArea';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';

const StepOne = () => {
  const capitalTrabajo = { value: '1', label: 'Capital de trabajo' };
  const adquisicionActivacion = { value: '2', label: 'Adquisición de activos' };

  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      usoCredito: datosEmpresa.usoCredito,
      descripcionCredito: datosEmpresa.descripcionCredito,
    },
    validationSchema: Yup.object({
      usoCredito: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      descripcionCredito: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '2' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/2');
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleUsoCredito = (usoCredito) => {
    if (!touched.usoCredito) {
      setFieldTouched('usoCredito', true);
    }
    setFieldValue('usoCredito', usoCredito);
  };

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">Platícanos...</h2>
            <p className="color-dark-gray sub position-relative">
              ¿Para qué usarás tu crédito?
              <Tooltip message="Esto nos ayudará a entender un poco más el objetivo por el cual estás solicitando tu crédito. " />
            </p>

            <div className="row my-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-lg-5 pl-md-5  mb-sm-2 mb-xs-2">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.usoCredito && values.usoCredito.value === capitalTrabajo.value && 'card-selected-blue-sky'
                  }`}
                  onClick={() => handleUsoCredito(capitalTrabajo)}
                >
                  <div>
                    <SvgPersonaFisicaActividadFisica />
                  </div>

                  <p className="px-md-5 px-lg-5">{capitalTrabajo.label}</p>
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5 mb-sm-2 mb-xs-2">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.usoCredito &&
                    values.usoCredito.value === adquisicionActivacion.value &&
                    'card-selected-blue-sky'
                  }`}
                  onClick={() => handleUsoCredito(adquisicionActivacion)}
                >
                  <div>
                    <SvgPersonaFisicaActividadFisica />
                  </div>

                  <p>{adquisicionActivacion.label}</p>
                </button>
              </div>
            </div>
            <div className="row">
              <TextArea
                name="descripcionCredito"
                maxlength={180}
                formulario={formulario}
                label="Platícanos un poco más sobre qué harás con este crédito..."
                format="textArea"
              />
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
  );
};

export default StepOne;
