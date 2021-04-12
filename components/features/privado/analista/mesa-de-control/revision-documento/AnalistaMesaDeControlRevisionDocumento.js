import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import VisorPDF from '../../../../../shared/visor/VisorPDF';
import Reportes from '../../../shared/documentos/reportes/Reportes';

const AnalistaMesaDeControlRevisionDocumento = () => {
  const {
    perfilProspecto,
    informacionObligadoSolidario,
    informacionProspecto,
    informacionSolicitud,
    otraInformacion,
    documentosProspecto,
    documentosObligadoSolidario,
  } = useSelector((state) => state.prospecto);

  const container = useRef();

  return (
    <div className="container-fluid px-0">
      <div className="mt-4 mb-5">
        <h3 className="color-blue-storm">Mi perfil</h3>
      </div>

      <div className="row">
        <div className="col-5">notas</div>
        <div className="col-7" ref={container}>
          <VisorPDF container={container} />
        </div>
      </div>
    </div>
  );
};

export default AnalistaMesaDeControlRevisionDocumento;
