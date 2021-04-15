import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
// import VisorPDF from '../../../../../shared/visor/VisorPDF';
import Reportes from '../../../shared/documentos/reportes/Reportes';

const VisorPDF = dynamic(() => import('../../../../../shared/visor/VisorPDF'), {
  ssr: false,
});

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
    <div className="container-fluid px-0 h-100">
      <div className="row h-100">
        <div className="col-5">
          <div>notas</div>
        </div>
        <div className="col-7 h-100" ref={container}>
          <VisorPDF container={container} />
        </div>
      </div>
    </div>
  );
};

export default AnalistaMesaDeControlRevisionDocumento;
