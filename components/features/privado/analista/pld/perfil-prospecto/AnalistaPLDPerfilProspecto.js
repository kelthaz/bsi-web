import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Accordion from '../../../../../shared/accordion/Accordion';
import Tab from '../../../../../shared/tab/Tab';
import TabItem from '../../../../../shared/tab/TabItem';
import SvgDocumentosPequeño from '../../../../../svgs/iconos/SvgDocumentosPequeño';
import SvgAgendarVerde from '../../../../../svgs/SvgAgendarVerde';
import DatosBasicos from '../../../shared/informacion/basica/DatosBasicos';
import ObligadoSolidarioInformacion from '../../../shared/informacion/obligado-solidario/ObligadoSolidarioInformacion';
import PerfilProspecto from '../../../shared/perfil-prospecto/PerfilProspecto';
import ProgressBar from '../../../shared/progressbar/ProgressBar';
import SolicitudInformacion from '../../../shared/informacion/solicitud/SolicitudInformacion';
import OtrosDatos from '../../../shared/informacion/otros-datos/OtrosDatos';
import DocumentosProspecto from '../../../shared/documentos/prospecto/DocumentosProspecto';
import DocumentosObligadoSolidario from '../../../shared/documentos/obligado-solidario/DocumentosObligadoSolidario';
import { ANALISTA_PLD } from '../../../../../../constants/roles';
import Modal from '../../../../../shared/modal/Modal';
import TextField from '../../../../../shared/text-field/TextField';
import { campoRequerido } from '../../../../../../constants/errors';
import TextArea from '../../../../../shared/text-area/TextArea';

const AnalistaPLDPerfilProspecto = () => {
  const [openRechazar, setOpenRechazar] = useState(false);
  const [aprobados, setAprobados] = useState(false);

  const {
    perfilProspecto,
    informacionObligadoSolidario,
    informacionProspecto,
    informacionSolicitud,
    otraInformacion,
    documentosProspecto,
    documentosObligadoSolidario,
  } = useSelector((state) => state.prospecto);

  const formulario = useFormik({
    initialValues: {
      numeroEmpleado: '',
      comentarios: '',
    },
    validationSchema: Yup.object({
      numeroEmpleado: Yup.string().required(campoRequerido),
      comentarios: aprobados ? Yup.string() : Yup.string().required(campoRequerido),
    }),
    onSubmit: async (values) => {},
  });

  const rechazarRelacionado = (relacionado) => {
    setOpenRechazar(true);
  };

  const aprobarRelacionado = (relacionado) => {
    setAprobados(true);
    setOpenRechazar(true);
  };

  return (
    <>
      <Modal openModal={openRechazar} setOpenModal={setOpenRechazar}>
        <div className="modal-portal-privado">
          <h4 className="color-blue-storm">Rechazando persona</h4>

          <p className="color-gray body3">
            Anel, has rechazado a Alberto Abad Gómez, Obligado Solidario del Solicitante, por favor escribe tus
            comentarios pertinentes, así como tu número de empleado para guardar el registro y notificar al Prospecto.
          </p>

          {!aprobados && (
            <TextArea
              name="comentarios"
              label="Escribe tus comentarios"
              maxlength={300}
              format="textArea"
              {...formulario.getFieldMeta('comentarios')}
              {...formulario.getFieldHelpers('comentarios')}
            />
          )}

          <TextField
            name="numeroEmpleado"
            format="number"
            maxlength={8}
            type="text"
            size="small"
            label="Número de línea autorizada"
            {...formulario.getFieldMeta('numeroEmpleado')}
            {...formulario.getFieldHelpers('numeroEmpleado')}
          />

          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              Confirmar
            </button>
          </div>
        </div>
      </Modal>

      <div className="container-fluid px-0">
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

            <PerfilProspecto
              role={ANALISTA_PLD}
              perfilData={perfilProspecto}
              aprobar={aprobarRelacionado}
              rechazar={rechazarRelacionado}
            />
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
                  color="blue"
                  icon="arrow"
                  expanded
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
                <Accordion
                  title={
                    <span>
                      <SvgDocumentosPequeño />
                      &nbsp;Documentos del prospecto
                    </span>
                  }
                  color="blue"
                  icon="arrow"
                  expanded
                >
                  <DocumentosProspecto
                    documentosProspecto={documentosProspecto}
                    tipoPersona={perfilProspecto.tipoPersona}
                    nombreConyuge={informacionProspecto.nombreConyuge}
                    aprobador
                    aprobar={aprobarRelacionado}
                    rechazar={rechazarRelacionado}
                  />
                </Accordion>
                <Accordion
                  title={
                    <span>
                      <SvgDocumentosPequeño />
                      &nbsp;Documentos de obligado solidario
                    </span>
                  }
                  color="blue"
                  icon="arrow"
                  expanded
                >
                  <DocumentosObligadoSolidario
                    documentosObligadoSolidario={documentosObligadoSolidario}
                    tipoPersonaObligadoSolidario={informacionObligadoSolidario.tipoPersona}
                    nombreObligadoSolidario={informacionObligadoSolidario.nombreCompleto}
                    nombreConyugeObligadoSolidario={informacionObligadoSolidario.nombreConyuge}
                    aprobador
                    aprobar={aprobarRelacionado}
                    rechazar={rechazarRelacionado}
                  />
                </Accordion>
              </TabItem>
            </Tab>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalistaPLDPerfilProspecto;
