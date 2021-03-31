import React, { useState } from 'react';
import { useFormik } from 'formik';

import Accordion from '../../components/shared/accordion/Accordion';
import Modal from '../../components/shared/modal/Modal';
import DatePickerInput from '../../components/shared/datepicker/DatePickerInput';
import Select from '../../components/shared/select/Select';
import Section from '../../components/shared/section/Section';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import Calendar from '../../components/shared/calendar/Calendar';
import ResultSimulador from '../../components/core/simulador/ResultSimulador';
import SvgDocumentos from '../../components/svgs/iconos/SvgDocumentos';
import EstadoDocumentosFirma from '../../components/features/privado/shared/estado-documentos/firma/EstadoDocumentosFirma';
import EstadoDocumentosProspecto from '../../components/features/privado/shared/estado-documentos/prospecto/EstadoDocumentosProspecto';
import EstadoDocumentosRepresentanteLegal from '../../components/features/privado/shared/estado-documentos/representante-legal/EstadoDocumentosRepresentanteLegal';
import EstadoDocumentosAnalista from '../../components/features/privado/shared/estado-documentos/analista/EstadoDocumentosAnalista';
import AsignarCasos from '../../components/features/privado/shared/asignacion-casos/AsignarCasos';
import TablaProspecto from '../../components/features/privado/shared/tabla-prospectos/TablaProspectos';
import Tab from '../../components/shared/tab/Tab';
import TabItem from '../../components/shared/tab/TabItem';

const NuevosComponentes = () => {
  const [openModal, setOpenModal] = useState(false);
  const formulario = useFormik({
    initialValues: {},
  });

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div>
          <h4 className="color-blue-storm">Agendar visita para mi obligado solidario</h4>
        </div>
        <div style={{ maxWidth: '540px' }}>
          <p className="body2">
            Alejandra, selecciona dos fechas en las que tu obligado solidario pueda recibir a uno de nuestros ejecutivos
            para conocerlo.
          </p>
          <p className="body2">Al concluir exitosamente la visita, podrás agendar tu propia visita de ejecutivo.</p>
          <div className="row">
            <div className="col-lg-6">
              <DatePickerInput disablePreviousDays disableWeekends name="fecha" />
            </div>
            <div className="col-lg-6">
              <Select
                label="Hora"
                name="hora"
                size="smallb"
                items={[
                  { label: '09:00', value: '09:00' },
                  { label: '10:00', value: '10:00' },
                  { label: '11:00', value: '11:00' },
                  { label: '12:00', value: '12:00' },
                  { label: '13:00', value: '13:00' },
                  { label: '14:00', value: '14:00' },
                  { label: '15:00', value: '15:00' },
                  { label: '16:00', value: '16:00' },
                  { label: '17:00', value: '17:00' },
                  { label: '18:00', value: '18:00' },
                ]}
                blue
                {...formulario.getFieldMeta('hora')}
                {...formulario.getFieldHelpers('hora')}
              />
            </div>
          </div>
        </div>
      </Modal>
      {/* 01 DATEPICKER */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="01" linea1="Datepicker" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h4 className="color-blue-storm">Datepicker</h4>
                <div className="col-lg-9">
                  <DatePickerInput />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <h4 className="color-blue-storm">Fines de semana bloqueados</h4>
                <div className="col-lg-9">
                  <DatePickerInput disableWeekends />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <h4 className="color-blue-storm">Días previos bloqueados</h4>
                <div className="col-lg-9">
                  <DatePickerInput disablePreviousDays />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <h4 className="color-blue-storm">Algunos días bloqueados</h4>
                <div className="col-lg-9">
                  <DatePickerInput
                    disabledDays={[
                      new Date(),
                      new Date(2021, 1, 14),
                      new Date(2021, 1, 15),
                      new Date(2021, 1, 17),
                      new Date(2021, 1, 19),
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col-12">
                <button className="btn-medium" type="button" onClick={() => setOpenModal(true)}>
                  Preview
                </button>
              </div>
            </div>
          </div>
        </Section>
      </article>
      {/* 02 (WIP) CALENDARIO */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="02" linea1="(WIP) Calendario" />
            </div>
            <div className="row">
              <div className="col-12">
                <Calendar />
              </div>
            </div>
          </div>
        </Section>
      </article>
      {/* 03 RESULTADO DEL SIMULADOR */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="03" linea1="Resultado del simulador" />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card-simple-blue-light">
                  <div className="line-bottom">
                    <h4 className="color-blue-storm">Características del crédito</h4>
                  </div>
                  <div className="mt-4">
                    <ResultSimulador
                      dataSimulador={{ plazo: { label: '24 meses' }, periodicidad: { label: 'Bimestrales' } }}
                      resultSimulador={{
                        tasaOrdinaria: '25%',
                        comisionApertura: '5%',
                        cat: '3%',
                        pago: '$31,250',
                        tasaMoratoria: '63%',
                      }}
                      color="night"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </article>
      {/* 04 ESTADO DE LOS DOCUMENTOS */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="04" linea1="Estado de los documentos Prospecto" />
            </div>
            <div className="row">
              <div className="col-7">
                <Accordion title={<span><SvgDocumentos /> Documentos Bancoppel</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosFirma documentos={[
                    { id: 1, nombre: 'Contrato', ruta: 'contrato_alejandra.pdf', estado: 0 },
                    { id: 2, nombre: 'Solicitud de servicio EmpresaNet', ruta: 'solicitud_empNet.pdf', estado: 2 },
                    { id: 3, nombre: 'Kit de apertura', ruta: 'kitapertura.pdf', estado: 1 }
                  ]} />
                </Accordion>
                <Accordion title={<span><SvgDocumentos /> Mis documentos</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosProspecto documentos={[
                    { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
                    { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
                    { id: 3, nombre: 'Comprobante de domicilio', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 1 },
                    { id: 4, nombre: 'Poderes notariales', ruta: 'poderes.pdf', estado: 0 },
                    { id: 5, nombre: 'Acta constitutiva', ruta: 'acta.pdf', estado: 2 },
                    { id: 6, nombre: 'Reformas' },
                    { id: 7, nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 1 },
                    { id: 8, nombre: 'Selfie', ruta: 'selfie.png', estado: 1 },
                  ]} />
                </Accordion>
                <Accordion title={<span><SvgDocumentos /> Documentos obligado solidario</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosProspecto documentos={[
                    { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
                    { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
                    { id: 3, nombre: 'Comprobante de domicilio', ruta: 'comprobante.png', estado: 1 }
                  ]} />
                </Accordion>
                <Accordion title={<span><SvgDocumentos /> Representantes legales</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosRepresentanteLegal representantes={[
                    {
                      id: 1,
                      nombre: 'Jorge Ortiz Cruz', telefono: '55 1234 5678', email: 'jorge@mail.com',
                      documentos: [
                        { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 1 },
                        { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 1 }
                      ]
                    },
                    {
                      id: 2,
                      nombre: 'Patricia Florez Sánchez', telefono: '55 1234 5678', email: 'patricia@mail.com',
                      documentos: [
                        { id: 3, nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 2 },
                        { id: 4, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 2 }
                      ]
                    }
                  ]} />
                </Accordion>
              </div>
            </div>
          </div>
          </Section>
      </article>
      {/* 05 ESTADO DE LOS DOCUMENTOS */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="05" linea1="Estado de los documentos Analista" />
            </div>
            <div className="row">
              <div className="col-7">
                <Accordion title={<span><SvgDocumentos /> Documentos del prospecto</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosAnalista prospecto={{
                    documentos: [
                      { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
                      { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
                      { id: 3, nombre: 'Comprobante de domicilio (Comercial)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
                      { id: 4, nombre: 'Comprobante de domicilio (Fiscal)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
                      { id: 5, nombre: 'Acta de matrimonio', ruta: 'Acta_matrimonio.pdf', estado: 0 },
                      { id: 6, nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 0 },
                      { id: 7, nombre: 'Selfie', ruta: 'selfie.png', estado: 0 },
                      { id: 8, nombre: 'Autorización de crédito', ruta: 'Autorizacion_credito.pdf', estado: 0 },
                      { id: 9, nombre: 'Reporte de buró de crédito', ruta: 'reporte_buro_credito.pdf', estado: 0 }
                    ],
                    relaciones: [
                      {
                        id: 1,
                        nombre: 'Carlos Pérez Díaz', descripcion: 'Cónyuge del solicitante',
                        documentos: [
                          { id: 10, nombre: 'Identificación oficial (Frente)', ruta: 'INE_Carlos.jpg', estado: 1 },
                          { id: 11, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_Carlos.jpg', estado: 1 }
                        ]
                      }
                    ]
                  }} />
                </Accordion>
                <Accordion title={<span><SvgDocumentos /> Documentos de obligado solidario</span>} expanded={false} color="blue" icon="arrow">
                  <EstadoDocumentosAnalista prospecto={{
                    relaciones: [
                      {
                        id: 1,
                        nombre: 'Alberto Abad Gómez', descripcion: 'Obligado solidario',
                        documentos: [
                          { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'INE_AAG.jpg', estado: 0 },
                          { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_AAG.jpg', estado: 0 },
                          { id: 3, nombre: 'Relación patrimonial', ruta: 'relacion_patrimonial.pdf', estado: 0 },
                          { id: 4, nombre: 'Comprobante de domicilio', ruta: 'Comprobante_luz.jpg', estado: 0 },
                          { id: 5, nombre: 'Acta de matrimonio', ruta: 'acta.pdf', estado: 0 },
                        ]
                      },
                      {
                        id: 2,
                        nombre: 'Diana Flores Cantú', descripcion: 'Cónyuge del obligado solidario',
                        documentos: [
                          { id: 6, nombre: 'Identificación oficial (Frente)', ruta: 'INE_Diana.jpg', estado: 1 },
                          { id: 7, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_Diana.jpg', estado: 1 }
                        ]
                      }
                    ]
                  }} />
                </Accordion>
              </div>
            </div>
          </div>
        </Section>
      </article>
      {/* 06 ASIGNACIÓN DE CASOS */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="06" linea1="Asignación de casos" />
            </div>
            <div className="row">
              <div className="col-12">
                <AsignarCasos />
              </div>
            </div>
          </div>
        </Section>
      </article>
      {/* 07 TABLA DE RESULTADOS */}
      <article>
        <section>
          <div className="container">
            <div className="row pt-lg-5 pt-md-4 pt-sm-2 pt-xm-1 justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="mb-md-4">
                  <TitleSection orden="07" linea1="Tabla de prospectos" />
                </div>
              </div>
            </div>
            <div className="row pb-lg-5 pb-md-4 pb-sm-2 pb-xm-1 justify-content-center">
              <div className="col-lg-12 col-md-12 justify-content-center">
              <Tab>
                <TabItem tab="Documentos por revisar" keyTab="1">
                  <TablaProspecto data={[
                      { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
                      { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
                      { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
                      { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
                      { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
                      { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
                      { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
                      { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
                      { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
                      { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' }
                    ]}
                      compact
                  />
                </TabItem>
                <TabItem tab="Generar alta de cliente" keyTab="2" />
                <TabItem tab="Generar alta de linea" keyTab="3" />
                <TabItem tab="Desembolso" keyTab="4" />
              </Tab>
              </div>
            </div>
          </div>
        </section>
      </article>
      {/* 08 PRUEBA DEL PAGINADOR */}
      <article>
        <Section>
          <div className="col-lg-12 col-md-12">
            <div className="mb-md-4">
              <TitleSection orden="08" linea1="Prueba del paginador" />
            </div>
            <div className="row text-center mt-4">
              <div className="col-12">
                <a className="link" href="/nuevos-componentes/prueba-paginador">
                  Preview
                </a>
              </div>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
};
export default NuevosComponentes;
