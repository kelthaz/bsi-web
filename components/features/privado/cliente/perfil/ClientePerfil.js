import React from 'react';
import { useSelector } from 'react-redux';
import { CLIENTE } from '../../../../../constants/roles';
import Accordion from '../../../../shared/accordion/Accordion';
import Tab from '../../../../shared/tab/Tab';
import TabItem from '../../../../shared/tab/TabItem';
import SvgDocumentosPequeño from '../../../../svgs/iconos/SvgDocumentosPequeño';
import SvgAgendarVerde from '../../../../svgs/SvgAgendarVerde';
import DocumentosBancoppel from '../../shared/documentos/bancoppel/DocumentosBancoppel';
import DocumentosClienteObligadoSolidario from '../../shared/documentos/cliente-obligado-solidario/DocumentosClienteObligadoSolidario';
import DocumentosCliente from '../../shared/documentos/cliente/DocumentosCliente';
import RepresentantesLegales from '../../shared/documentos/representantes-legales/RepresentantesLegales';
import DatosBasicos from '../../shared/informacion/basica/DatosBasicos';
import DatosEmpresa from '../../shared/informacion/empresa/DatosEmpresa';
import ObligadoSolidarioInformacion from '../../shared/informacion/obligado-solidario/ObligadoSolidarioInformacion';
import DatosSolicitante from '../../shared/informacion/solicitante/DatosSolicitante';
import PerfilProspecto from '../../shared/perfil-prospecto/PerfilProspecto';
import ProgressBar from '../../shared/progressbar/ProgressBar';

const ClientePerfil = () => {
  const {
    perfilProspecto,
    informacionObligadoSolidario,
    informacionProspecto,
    documentosProspecto,
    documentosObligadoSolidario,
    documentosRepresentantesLegales,
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

          <PerfilProspecto role={CLIENTE} perfilData={perfilProspecto} />
        </div>
        <div className="col-7">
          <Tab>
            <TabItem tab="Información" keyTab="1">
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos de contacto
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <DatosBasicos informacionProspecto={informacionProspecto} tipoPersona={perfilProspecto.tipoPersona} />
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
                    <SvgDocumentosPequeño /> Datos del solicitante
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <DatosSolicitante
                  informacionProspecto={informacionProspecto}
                  tipoPersona={perfilProspecto.tipoPersona}
                />
              </Accordion>

              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Datos de la empresa
                  </span>
                }
                color="blue"
                icon="arrow"
                expanded
              >
                <DatosEmpresa informacionProspecto={informacionProspecto} tipoPersona={perfilProspecto.tipoPersona} />
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
            </TabItem>
            <TabItem tab="Documentos" keyTab="2">
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Documentos Bancoppel
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DocumentosBancoppel documentosBancoppel={documentosProspecto} />
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Mis documentos
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DocumentosCliente
                  documentosProspecto={documentosProspecto}
                  tipoPersona={perfilProspecto.tipoPersona}
                  nombreConyuge={informacionProspecto.nombreConyuge}
                />
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Documentos obligado solidario
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <DocumentosClienteObligadoSolidario
                  documentosObligadoSolidario={documentosObligadoSolidario}
                  tipoPersonaObligadoSolidario={informacionObligadoSolidario.tipoPersona}
                  nombreObligadoSolidario={informacionObligadoSolidario.nombreCompleto}
                  nombreConyugeObligadoSolidario={informacionObligadoSolidario.nombreConyuge}
                />
              </Accordion>
              <Accordion
                title={
                  <span>
                    <SvgDocumentosPequeño /> Representantes legales
                  </span>
                }
                expanded={false}
                color="blue"
                icon="arrow"
              >
                <RepresentantesLegales documentosRepresentantesLegales={documentosRepresentantesLegales} />
              </Accordion>
            </TabItem>
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default ClientePerfil;
