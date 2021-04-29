import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosProspecto = ({ documentosProspecto, tipoPersona, nombreConyuge, aprobador, aprobar, rechazar }) => {
  const labels = {
    ine: 'Identificación oficial (Frente)',
    ineReverso: 'Identificación oficial (Frente)',
    comprobanteDomicilioFiscal: 'Comprobante de domicilio (Fiscal)',
    comprobanteDomicilioComercial: 'Comprobante de domicilio (Comercial)',

    poderesNotarial: 'Poderes notariales',
    actaConstitutiva: 'Acta constitutiva',
    escriturasConReformas: 'Reformas',
    integracionRiesgoComun: 'Integración de riesgo común',

    actaMatrimonio: 'Acta de matrimonio',
    pruebaDeVida: 'Prueba de vida',
    selfie: 'Selfie',
    autorizacionCredito: 'Autorización de crédito',
    reporteBuroCredito: 'Reporte de buró de crédito',
    inePareja: 'Identificación oficial (Frente)',
    ineReversoPareja: 'Identificación oficial (Reverso)',

    verificacionSociedad: 'Verificación de sociedad',
    buroLegal: 'Buró legal',
  };

  if (tipoPersona !== MORAL) {
    delete labels.poderesNotarial;
    delete labels.actaConstitutiva;
    delete labels.escriturasConReformas;
    delete labels.integracionRiesgoComun;
    delete labels.verificacionSociedad;
    delete labels.buroLegal;
  } else {
    delete labels.actaMatrimonio;
    delete labels.inePareja;
    delete labels.ineReversoPareja;
  }

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map(
        (item) =>
          documentosProspecto[item] && (
            <>
              {nombreConyuge && item === 'inePareja' && (
                <div className="row no-gutters mb-3 card-simple-blue-light">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="d-flex flex-column">
                      <span className="sub color-blue-storm">{nombreConyuge}</span>
                      <span className="overline color-gray">Cónyuge del solicitante</span>
                    </div>
                  </div>
                  {aprobador && (
                    <div className="col-6 d-flex justify-content-end">
                      <div className="color-blue-storm body3">
                        <button className="btn-medium-secondary" type="button" onClick={rechazar}>
                          Rechazar
                        </button>
                        <button className="btn-medium-secondary ml-3" type="button" onClick={aprobar}>
                          Aceptar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <EstadoDocumento
                key={item}
                label={labels[item]}
                documento={documentosProspecto[item].nombreDocumento}
                estadoDocumento={documentosProspecto[item].estado}
              />
            </>
          )
      )}
    </>
  );
};

DocumentosProspecto.propTypes = {
  documentosProspecto: PropTypes.object.isRequired,
  tipoPersona: PropTypes.string.isRequired,
  nombreConyuge: PropTypes.string.isRequired,
  aprobador: PropTypes.bool,
  rechazar: PropTypes.func,
  aprobar: PropTypes.func,
};

DocumentosProspecto.defaultProps = {
  aprobador: false,
  rechazar: () => {},
  aprobar: () => {},
};

export default DocumentosProspecto;
