import React, { useState } from 'react';
import { useFormik } from 'formik';

import Modal from '../../components/shared/modal/Modal';
import DatePickerInput from '../../components/shared/datepicker/DatePickerInput';
import Select from '../../components/shared/select/Select';
import Section from '../../components/shared/section/Section';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import Calendar from '../../components/shared/calendar/Calendar';
import ResultSimulador from '../../components/core/simulador/ResultSimulador';

const Test = () => {

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
        <div style={{maxWidth: '540px'}}>
          <p className="body2">
            Alejandra, selecciona dos fechas en las que tu obligado solidario pueda recibir a
            uno de nuestros ejecutivos para conocerlo.
          </p>
          <p className="body2">
            Al concluir exitosamente la visita, podrás agendar tu propia visita de ejecutivo.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <DatePickerInput
                disablePreviousDays
                disableWeekends
                name="fecha"
              />
            </div>
            <div className="col-lg-6">
              <Select
                label="Hora"
                name="hora"
                formulario={formulario}
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
                  { label: '18:00', value: '18:00' }
                ]}
                blue
              />
            </div>
          </div>
        </div>
      </Modal>
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
                      new Date(2021, 1, 19)
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col-12">
                <button className="btn-medium" type="button" onClick={() => setOpenModal(true)}>Preview</button>
              </div>
            </div>
          </div>
        </Section>
      </article>
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
                      dataSimulador={{ plazo: {label: '24 meses'}, periodicidad: { label: 'Bimestrales'} }}
                      resultSimulador={{ tasaOrdinaria: '25%', comisionApertura: '5%', cat: '3%', pago: '$31,250', tasaMoratoria: '63%' }}
                      color="night"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
};
export default Test;
