import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

const DocumentosObligadoSolidario = ({
  documentosObligadoSolidario,
  tipoPersonaObligadoSolidario,
  nombreObligadoSolidario,
  nombreConyugeObligadoSolidario,
}) => {
  const labels = {
    ine: 'Identificación oficial (Frente)',
    ineReverso: 'Identificación oficial (Frente)',
    relacionPatrimonial: 'Relación patrimonial',

    comprobanteDomicilioFiscal:
      tipoPersonaObligadoSolidario === MORAL ? 'Comprobante de domicilio (Fiscal)' : 'Comprobante de domicilio',
    comprobanteDomicilioComercial: 'Comprobante de domicilio (Comercial)',

    actaMatrimonio: 'Acta de matrimonio',
    inePareja: 'Identificación oficial (Frente)',
    ineReversoPareja: 'Identificación oficial (Reverso)',

    poderesNotarial: 'Poderes notariales',
    actaConstitutiva: 'Acta constitutiva',
    escriturasConReformas: 'Reformas',
    reporteBuroCredito: 'Reporte de buró de crédito',
    verificacionSociedad: 'Verificación de sociedad',
  };

  if (tipoPersonaObligadoSolidario !== MORAL) {
    delete labels.poderesNotarial;
    delete labels.actaConstitutiva;
    delete labels.escriturasConReformas;
    delete labels.reporteBuroCredito;
    delete labels.verificacionSociedad;
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
      <div className="row no-gutters mb-3 card-simple-blue-light">
        <div className="col-12">
          <span className="d-flex sub color-blue-storm">{nombreObligadoSolidario}</span>
          <span className="d-flex overline color-gray">Obligado solidario</span>
        </div>
      </div>
      {itemsPerfil.map(
        (item) =>
          documentosObligadoSolidario[item] && (
            <>
              {nombreConyugeObligadoSolidario && item === 'inePareja' && (
                <div className="row no-gutters mb-3 card-simple-blue-light">
                  <div className="col-12">
                    <span className="d-flex sub color-blue-storm">{nombreConyugeObligadoSolidario}</span>
                    <span className="d-flex overline color-gray">Cónyuge del solicitante</span>
                  </div>
                </div>
              )}
              <div key={item} className="row pb-3">
                <div className="col-5">
                  <span className="body2">{labels[item]}</span>
                </div>
                <div className="col-5 text-overflow">
                  <span className="link">{documentosObligadoSolidario[item].nombreDocumento}</span>
                </div>
                <div className="col-2 text-center">{iconoEstado(documentosObligadoSolidario[item].estado)}</div>
              </div>
            </>
          )
      )}
    </>
  );
};

DocumentosObligadoSolidario.propTypes = {
  documentosObligadoSolidario: PropTypes.object.isRequired,
  tipoPersonaObligadoSolidario: PropTypes.string.isRequired,
  nombreObligadoSolidario: PropTypes.string.isRequired,
  nombreConyugeObligadoSolidario: PropTypes.string.isRequired,
};

export default DocumentosObligadoSolidario;
