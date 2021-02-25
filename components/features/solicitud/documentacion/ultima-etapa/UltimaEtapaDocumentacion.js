import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SvgDocumento from '../../../../svgs/SvgDocumento';
import SvgOferta from '../../../../svgs/SvgOferta';
import SvgPersona from '../../../../svgs/SvgPersona';
import SvgPersonaMoralColor from '../../../../svgs/SvgPersonaMoralColor';
import { PASO_UNO_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { MORAL } from '../../../../../constants/persona';

const UltimaEtapaDocumentacion = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleContinuar = async () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: validate ? { ...currentStep, paso: currentStep.paso + 1 } : { ...currentStep },
      })
    );
    await push(PASO_UNO_DOCUMENTACION_ROUTE);
  };

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 ">
          <h2 className="color-blue-storm">¡Ya estamos en la última etapa!</h2>
          <p className="body2 color-gray-dark">
            {`${datosPersonales.primerNombre}, para terminar, en este último bloque designarás a tu Obligado Solidario, subirás algunos documentos y realizarás tu toma de Biométricos.`}
          </p>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgPersona />
                <p className="py-md-3 py-xs-0">Datos personales</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgPersonaMoralColor />
                <p className="py-md-3 py-xs-0">Datos de tu empresa</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgOferta />
                <p className="py-md-3 py-xs-0">Oferta</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgDocumento />
                <p className="py-md-3 py-xs-0">Documentación</p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 color-gray-dark">Deberás tener a la mano:</p>
            <div className="card-simple-blue-light list-onboarding">
              {datosPersonales.tipoPersona === MORAL ? (
                <ul>
                  <li>Acta constitutiva </li>
                  <li className="position-relative">Poderes notariales</li>
                  <li className="position-relative">
                    Escrituras con reformas <span className="color-gray">(Opcional)</span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio comercial <span className="color-gray">(No mayor a tres meses)</span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio fiscal <span className="ml-xs-1 color-gray">(No mayor a tres meses)</span>
                  </li>
                  <li className="position-relative">
                    INE del representante legal <span className="ml-xs-1 color-gray">(Frente y reverso)</span>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    Comprobante de domicilio comercial
                    <span className="color-gray"> (No mayor a tres meses)</span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio fiscal
                    <span className="color-gray"> (No mayor a tres meses) </span>
                  </li>
                  <li className="position-relative">
                    Tu INE <span className="ml-xs-1 color-gray">(Frente y reverso)</span>
                  </li>
                  <li className="position-relative">
                    Acta de matrimonio <span className="color-gray">(Si estás casado)</span>
                  </li>
                  <li className="position-relative">
                    INE de tu pareja <span className="color-gray">(Si estás casado, frente y reverso)</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex-column-start-config">
            <button type="submit" className="btn-medium flex-align-self-center my-3" onClick={handleContinuar}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UltimaEtapaDocumentacion.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default UltimaEtapaDocumentacion;
