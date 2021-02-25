import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MORAL } from '../../../../../constants/persona';
import { PASO_OCHO_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

const GraciasPorContarnosDatosEmpresa = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = {
    handleSubmit: () => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
        })
      );
    },
    dirty: false,
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_OCHO_DATOS_EMPRESA_ROUTE, validate);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <div className="row ">
            <div className="col-md-12 col-xs-12 ">
              <h2 className="text-md-left color-blue-storm">¡Gracias por contarnos sobre ti!</h2>
              {datosPersonales.tipoPersona === MORAL ? (
                <p className="body2 text-md-left color-dark-gray sub mt-4">
                  Ahora necesitamos tu autorización para la Consulta de Buró de Crédito, por lo que deberás tener a la
                  mano la clave CIEC y e.firma <strong>de la empresa</strong>.
                </p>
              ) : (
                <p className="body2 text-md-left color-dark-gray sub mt-4">
                  Ahora necesitamos tu autorización para la Consulta de Buró de Crédito, por lo que deberás tener a la
                  mano tu clave CIEC y tu e.firma.
                </p>
              )}
            </div>
            <div className="text-center offset-md-4 offset-xs-3 my-3 ">
              <button className="btn-medium" type="submit" aria-label="Avanzar" onClick={handleSubmit}>
                <span>De acuerdo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GraciasPorContarnosDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default GraciasPorContarnosDatosEmpresa;
