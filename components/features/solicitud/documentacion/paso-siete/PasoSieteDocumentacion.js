import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import CheckBox from '../../../../shared/check-box/CheckBox';
import TextField from '../../../../shared/text-field/TextField';
import { campoRequerido } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import {
  PASO_OCHO_DOCUMENTACION_ROUTE,
  ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
} from '../../../../../constants/routes/solicitud/documentacion';

const StepSeven = ({ validate }) => {
  const {
    datosPersonales: { tipoPersona },
    documentacion,
    currentStep,
  } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const opcionesProcedenciaPagoCredito = [
    { value: 'Ahorros', label: 'Ahorros' },
    { value: 'Negocio propio', label: 'Negocio propio' },
    { value: 'Venta de negocios o propiedades', label: 'Venta de negocios o propiedades' },
    { value: 'Créditos', label: 'Créditos' },
    { value: 'Recursos de terceros', label: 'Recursos de terceros' },
  ];

  const formulario = useFormik({
    initialValues: {
      procedenciaPagoCreditoSeleccionados: documentacion.procedenciaPagoCreditoSeleccionados.map((procedencia) =>
        procedencia.includes('Otros:') ? 'Otros:' : procedencia
      ),
      recursoPago: documentacion.procedenciaPagoCreditoSeleccionados.find((uso) => uso.includes('Otros:'))
        ? documentacion.procedenciaPagoCreditoSeleccionados.find((uso) => uso.includes('Otros:')).replace('Otros:', '')
        : '',
    },
    validationSchema: Yup.object().shape({
      procedenciaPagoCreditoSeleccionados: Yup.array().min(1, 'Debe seleccionar al menos 1'),
      recursoPago: Yup.string().when('procedenciaPagoCreditoSeleccionados', {
        is: (seleccionados) => seleccionados.find((uso) => uso.includes('Otros:')),
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      const procedenciaPagoCreditoSeleccionados = values.procedenciaPagoCreditoSeleccionados.map((procedencia) =>
        procedencia.includes('Otros:') ? `${procedencia} ${values.recursoPago}` : procedencia
      );
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, ...values.recursoPago, procedenciaPagoCreditoSeleccionados },
        })
      );
    },
  });

  useEffect(() => {
    if (tipoPersona.value !== 'MORAL') {
      push(ULTIMA_ETAPA_DOCUMENTACION_ROUTE);
    }
  }, []);

  const [handleSubmit] = useOnChangePage(formulario, PASO_OCHO_DOCUMENTACION_ROUTE, currentStep);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container pl-md-3 pl-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={handleSubmit} noValidate>
              <div className="row ">
                <p className="color-dark-gray sub">
                  ¿Cuál será la procedencia de los recursos para pagar el crédito? Puedes seleccionar más de una opción:
                </p>
              </div>
              <div className="row ">
                {opcionesProcedenciaPagoCredito.map(({ value, label }) => (
                  <div key={label} className="pt-3 col-md-12 px-0">
                    <CheckBox name="procedenciaPagoCreditoSeleccionados" formulario={formulario} value={value}>
                      <p className="m-0">{label}</p>
                    </CheckBox>
                  </div>
                ))}
              </div>
              <div className="row pt-3 ">
                <div className="col-md-3 px-0 align-self-center">
                  <CheckBox name="procedenciaPagoCreditoSeleccionados" formulario={formulario} value="Otros:">
                    <p className="m-0">Otros, especifique: </p>
                  </CheckBox>
                </div>
                <div className="col-md-9 pl-3">
                  <TextField
                    name="recursoPago"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Recurso de pago"
                    maxlength={50}
                  />
                </div>
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
    </>
  );
};

StepSeven.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default StepSeven;
