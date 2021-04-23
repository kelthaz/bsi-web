import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';
import useOnChangePage from '../../../../../hooks/useOnChangePage';

const UltimoPasoDocumentacion = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = {
    submitForm: () => {
      // dispatch(
      //   nextStepDatosPersonales({
      //     currentStep: validate
      //       ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
      //       : { ...currentStep },
      //   })
      // );
    },
    dirty: false,
  };

  const [handleSubmit] = useOnChangePage(formulario, BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container">
          <div className="row ">
            <h2 className="color-blue-storm">Para el último paso</h2>
            <p className="mt-2">
              Es muy importante que accedas al proceso desde tu télefono celular o computador con camara.
            </p>
          </div>
          <div className="flex-column-center-config mt-2">
            <button type="button" className="btn-big" onClick={handleSubmit}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UltimoPasoDocumentacion.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default UltimoPasoDocumentacion;
