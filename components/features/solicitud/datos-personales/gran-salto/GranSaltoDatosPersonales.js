import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import SvgDocumentos from '../../../../svgs/SvgDocumentos';
import SvgOferta from '../../../../svgs/SvgOferta';
import SvgPersona from '../../../../svgs/SvgPersona';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { PASO_UNO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';

const GranSaltoDatosPersonales = ({ validate }) => {
  const { currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleComencemos = async () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: validate ? { ...currentStep, paso: currentStep.paso + 1 } : { ...currentStep },
      })
    );
    await push(PASO_UNO_DATOS_PERSONA_ROUTE);
  };

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container">
          <div className="row">
            <h2 className="color-blue-storm">
              ¡Estás por dar el siguiente <br className="only-lg-inline" /> gran salto!
            </h2>
            <p className="body2 color-gray-dark">
              En este primer paso te pediremos nos compartas un poco de información para conocerte mejor. Nuestro
              proceso se divide en cuatro bloques y te tomará aproximadamente 30 minutos completarlo todo:
            </p>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgPersona />
                <p>Datos Personales</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgPersonaMoral />
                <p>Datos de tu empresa</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgOferta />
                <p>Oferta</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgDocumentos />
                <p>Documentación</p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 color-gray-dark">En este primer bloque deberás contar con:</p>
            <div className="card-simple-blue-light list-onboarding">
              <ul>
                <li>RFC</li>
              </ul>
            </div>
            <button type="button" className="btn-medium flex-align-self-center my-3" onClick={handleComencemos}>
              ¡Comencemos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

GranSaltoDatosPersonales.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default GranSaltoDatosPersonales;
