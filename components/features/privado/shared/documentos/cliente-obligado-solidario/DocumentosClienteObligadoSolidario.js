import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosClienteObligadoSolidario = ({
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
  };

  if (tipoPersonaObligadoSolidario !== MORAL) {
    delete labels.poderesNotarial;
    delete labels.actaConstitutiva;
    delete labels.escriturasConReformas;
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

DocumentosClienteObligadoSolidario.propTypes = {
  documentosObligadoSolidario: PropTypes.object.isRequired,
  tipoPersonaObligadoSolidario: PropTypes.string.isRequired,
  nombreObligadoSolidario: PropTypes.string.isRequired,
  nombreConyugeObligadoSolidario: PropTypes.string.isRequired,
};

export default DocumentosClienteObligadoSolidario;
