import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from '../../../../../shared/accordion/Accordion';
import Tab from '../../../../../shared/tab/Tab';
import TabItem from '../../../../../shared/tab/TabItem';
import SvgDocumentosPequeño from '../../../../../svgs/iconos/SvgDocumentosPequeño';
import SvgAgendarVerde from '../../../../../svgs/SvgAgendarVerde';
import DatosBasicos from '../../../shared/informacion/basica/DatosBasicos';
import ObligadoSolidarioInformacion from '../../../shared/informacion/obligado-solidario/ObligadoSolidarioInformacion';
import PerfilProspecto from '../../../shared/perfil-prospecto/PerfilProspecto';
import ProgressBar from '../../../shared/progressbar/ProgressBar';
import { ANALISTA_JURIDICO } from '../../../../../../constants/roles';
import SolicitudInformacion from '../../../shared/informacion/solicitud/SolicitudInformacion';
import OtrosDatos from '../../../shared/informacion/otros-datos/OtrosDatos';

const AnalistaJuridicoPerfilProspecto = () => {
  const {
    perfilProspecto,
    informacionObligadoSolidario,
    informacionProspecto,
    informacionSolicitud,
    otraInformacion,
  } = useSelector((state) => state.prospecto);

  return (
    <div className="container-fluid px-0">
      <div className="mt-4 mb-5">
        <h3 className="color-blue-storm">Mi perfil</h3>
      </div>

      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="row">
              <div className="col-2 pr-0">
                <SvgAgendarVerde />
              </div>
              <div className="col-10 pl-0">
                <div className="color-gray body3">Proceso actual:</div>
                <div className="body3">Visita al obligado solidario</div>
                <ProgressBar value="50" />
              </div>
            </div>
          </div>

          <PerfilProspecto role={ANALISTA_JURIDICO} perfilData={perfilProspecto} />
        </div>
        <div className="col-7">
          <Tab>
            <TabItem tab="Información" keyTab="1">
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos de básicos
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <DatosBasicos informacionProspecto={informacionProspecto} tipoPersona={perfilProspecto.tipoPersona} />
              </Accordion>

              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos generales de solicitud
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <SolicitudInformacion
                  informacionSolicitud={informacionSolicitud}
                  tipoPersona={perfilProspecto.tipoPersona}
                />
              </Accordion>

              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos del obligado solidario
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <ObligadoSolidarioInformacion informacionObligado={informacionObligadoSolidario} />
              </Accordion>

              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Otros datos
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <OtrosDatos otraInformacion={otraInformacion} />
              </Accordion>
            </TabItem>
            <TabItem tab="Documentos" keyTab="2">
              Documentos
            </TabItem>
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default AnalistaJuridicoPerfilProspecto;
