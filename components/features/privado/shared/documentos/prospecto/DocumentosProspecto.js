import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

const DocumentosProspecto = ({ documentosProspecto, tipoPersona, nombreConyuge }) => {
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

  const iconoEstado = (estado) => {
    switch (estado) {
      case 0:
        return (
          <button className="btn-mini-secondary" type="button">
            Subir
          </button>
        );
      case 1:
        return (
          <button className="btn-mini-secondary" type="button">
            Revisar
          </button>
        );
      case 2:
        return <SvgAprobado />;
      default:
        return <></>;
    }
  };

  return (
    <>
      {itemsPerfil.map(
        (item) =>
          documentosProspecto[item] && (
            <>
              {nombreConyuge && item === 'inePareja' && (
                <div className="row no-gutters mb-3 card-simple-blue-light">
                  <div className="col-12">
                    <span className="d-flex sub color-blue-storm">{nombreConyuge}</span>
                    <span className="d-flex overline color-gray">Cónyuge del solicitante</span>
                  </div>
                </div>
              )}
              <div key={item} className="row pb-3">
                <div className="col-5">
                  <span className="body2">{labels[item]}</span>
                </div>
                <div className="col-5 text-overflow">
                  <span className="link">{documentosProspecto[item].nombreDocumento}</span>
                </div>
                <div className="col-2 text-center">{iconoEstado(documentosProspecto[item].estado)}</div>
              </div>
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
};

export default DocumentosProspecto;
