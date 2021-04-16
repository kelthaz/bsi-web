import React, { useState } from 'react';
import { useFormik } from 'formik';

import Modal from '../../components/shared/modal/Modal';
import DatePickerInput from '../../components/shared/datepicker/DatePickerInput';
import Select from '../../components/shared/select/Select';
import Section from '../../components/shared/section/Section';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import Calendar from '../../components/shared/calendar/Calendar';
import ResultSimulador from '../../components/core/simulador/ResultSimulador';
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
              <div className="col-7">componentes eliminados</div>
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
              <div className="col-7">componentes eliminados</div>
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
                    <TablaProspecto
                      data={[
                        {
                          nombre: 'Fernanda Rodriguez',
                          porRevisar: '3 documentos',
                          estatus: 1,
                          persona: 'PFAE',
                          tiempoEspera: '10 min',
                          region: 'Norte',
                        },
                        {
                          nombre: 'Daniela Fernanda',
                          porRevisar: '2 documentos',
                          estatus: 2,
                          persona: 'Moral',
                          tiempoEspera: '2 días',
                          region: 'Oeste',
                        },
                        {
                          nombre: 'José Lima Rodríguez',
                          porRevisar: '2 documentos',
                          estatus: 1,
                          persona: 'PFAE',
                          tiempoEspera: '3 días',
                          region: 'Oeste',
                        },
                        {
                          nombre: 'Alejandro Ramírez',
                          porRevisar: '3 documentos',
                          estatus: 0,
                          persona: 'PFAE',
                          tiempoEspera: '20 min',
                          region: 'Norte',
                        },
                        {
                          nombre: 'Mariana Nayeli',
                          porRevisar: '5 documentos',
                          estatus: 1,
                          persona: 'Moral',
                          tiempoEspera: '6 hrs',
                          region: 'Oeste',
                        },
                        {
                          nombre: 'Fernanda Rodriguez',
                          porRevisar: '3 documentos',
                          estatus: 1,
                          persona: 'PFAE',
                          tiempoEspera: '10 min',
                          region: 'Norte',
                        },
                        {
                          nombre: 'Daniela Fernanda',
                          porRevisar: '2 documentos',
                          estatus: 2,
                          persona: 'Moral',
                          tiempoEspera: '2 días',
                          region: 'Oeste',
                        },
                        {
                          nombre: 'José Lima Rodríguez',
                          porRevisar: '2 documentos',
                          estatus: 1,
                          persona: 'PFAE',
                          tiempoEspera: '3 días',
                          region: 'Oeste',
                        },
                        {
                          nombre: 'Alejandro Ramírez',
                          porRevisar: '3 documentos',
                          estatus: 0,
                          persona: 'PFAE',
                          tiempoEspera: '20 min',
                          region: 'Norte',
                        },
                        {
                          nombre: 'Mariana Nayeli',
                          porRevisar: '5 documentos',
                          estatus: 1,
                          persona: 'Moral',
                          tiempoEspera: '6 hrs',
                          region: 'Oeste',
                        },
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
