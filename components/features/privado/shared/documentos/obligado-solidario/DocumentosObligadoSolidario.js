import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosObligadoSolidario = ({
  documentosObligadoSolidario,
  tipoPersonaObligadoSolidario,
  nombreObligadoSolidario,
  nombreConyugeObligadoSolidario,
  aprobador,
  rechazar,
  aprobar,
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

  return (
    <>
      <div className="row no-gutters mb-3 card-simple-blue-light">
        <div className="col-6 d-flex justify-content-start">
          <div className="d-flex flex-column">
            <span className="sub color-blue-storm">{nombreObligadoSolidario}</span>
            <span className="overline color-gray">Obligado solidario</span>
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
      {itemsPerfil.map(
        (item) =>
          documentosObligadoSolidario[item] && (
            <>
              {nombreConyugeObligadoSolidario && item === 'inePareja' && (
                <div className="row no-gutters mb-3 card-simple-blue-light">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="d-flex flex-column">
                      <span className="sub color-blue-storm">{nombreConyugeObligadoSolidario}</span>
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
                documento={documentosObligadoSolidario[item].nombreDocumento}
                estadoDocumento={documentosObligadoSolidario[item].estado}
              />
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
  aprobador: PropTypes.bool,
  rechazar: PropTypes.func,
  aprobar: PropTypes.func,
};

DocumentosObligadoSolidario.defaultProps = {
  aprobador: false,
  rechazar: () => {},
  aprobar: () => {},
};

export default DocumentosObligadoSolidario;
