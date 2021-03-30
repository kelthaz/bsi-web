import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../progressbar/ProgressBar';
import SvgAgendarVerde from '../../../../svgs/SvgAgendarVerde';
import PerfilProspecto from '../perfil-prospecto/PerfilProspecto';
import { CLIENTE } from '../../../../../constants/roles';
import Tab from '../../../../shared/tab/Tab';
import TabItem from '../../../../shared/tab/TabItem';
import Accordion from '../../../../shared/accordion/Accordion';
import ObligadoSolidarioInformacion from '../informacion/obligado-solidario/ObligadoSolidarioInformacion';
import SvgDocumentosPequeño from '../../../../svgs/iconos/SvgDocumentosPequeño';
import SolicitudInformacion from '../informacion/solicitud/SolicitudInformacion';
import { MORAL } from '../../../../../constants/persona';
import DatosBasicos from '../informacion/basica/DatosBasicos';
import DatosEmpresa from '../informacion/empresa/DatosEmpresa';
import DatosSolicitante from '../informacion/solicitante/DatosSolicitante';

const Perfil = () => {
  const { perfilProspecto, informacionObligadoSolidario, informacionSolicitud, informacionProspecto } = useSelector(
    (state) => state.prospecto
  );

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

          <PerfilProspecto role={CLIENTE} perfilData={perfilProspecto} />
        </div>
        <div className="col-7">
          <Tab>
            <TabItem tab="Información" keyTab="1">
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos del obligado solidario
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <ObligadoSolidarioInformacion informacionObligado={informacionObligadoSolidario} />
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
                <SolicitudInformacion informacionSolicitud={informacionSolicitud} tipoPersona={MORAL} />
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos básicos
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DatosBasicos informacionProspecto={informacionProspecto} tipoPersona={MORAL} />
                <div className="row pb-3">
                  <div className="col-6">
                    <div className="body2">Contraseña</div>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className="btn-big-inverted-secondary " type="button">
                      Restablecer contraseña
                    </button>
                  </div>
                </div>
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos de la empresa
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DatosEmpresa informacionProspecto={informacionProspecto} tipoPersona={MORAL} />
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos del solicitante
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DatosSolicitante informacionProspecto={informacionProspecto} tipoPersona={MORAL} />
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

export default Perfil;
