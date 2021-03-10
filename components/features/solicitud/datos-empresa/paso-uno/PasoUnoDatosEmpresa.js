import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { campoRequerido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { PASO_DOS_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextArea from '../../../../shared/text-area/TextArea';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';

const PasoUnoDatosEmpresa = ({ validate }) => {
  const capitalTrabajo = { value: '1', label: 'Capital de trabajo' };
  const adquisicionActivacion = { value: '2', label: 'Adquisición de activos' };

  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

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
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleUsoCredito = async (usoCredito) => {
    if (!touched.usoCredito) {
      await setFieldTouched('usoCredito', true);
    }
    await setFieldValue('usoCredito', usoCredito);
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_DATOS_EMPRESA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
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
            <div className="row no-gutters">
              <TextArea
                name="descripcionCredito"
                maxlength={180}
                label="Platícanos un poco más sobre qué harás con este crédito..."
                format="textArea"
                {...formulario.getFieldMeta('descripcionCredito')}
                {...formulario.getFieldHelpers('descripcionCredito')}
              />
            </div>
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

PasoUnoDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoUnoDatosEmpresa;
