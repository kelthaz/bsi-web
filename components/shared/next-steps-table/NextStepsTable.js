import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './next-steps-table.module.scss';
import Tooltip from '../tooltip/Tooltip';
import SvgCompletada from '../../svgs/SvgCompletada';
import SvgEnProceso from '../../svgs/SvgEnProceso';
import SvgEspera from '../../svgs/SvgEspera';
import Modal from './../../shared/modal/Modal';
import DatePickerInput from '../../../components/shared/datepicker/DatePickerInput';
import Select from '../../../components/shared/select/Select';

const NextStepsTable = ({ value }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCancelar, setOpenModalCancelar] = useState(false);
  const itemsHoras = [
    { value: 1, label: '13:00' },
    { value: 2, label: '14:00' },
    { value: 3, label: '15:00' },
    { value: 4, label: '16:00' },
  ];
  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="modal-alerta-container">
          <div>
            <h4 className=" color-blue-storm">Agendar visita para mi obligado solidario</h4>
            <p className="dark-gray body2">
              Alejandra, añade dos fechas en las que tu obligado solidario pueda recibir a uno de nuestros ejecutivos
              para conocerlo y a su negocio.
            </p>
            <p className="dark-gray body2">
              Al concluir exitosamente la visita, podrás agendar tu propia visita de ejecutivo.
            </p>
            <div className="row mb-5">
              <div className="col-md-6">
                <DatePickerInput />
              </div>
              <div className="col-md-6">
                <Select
                  label="Hora"
                  name="horaAgendamiento"
                  showAlwaysErrors={false}
                  size="smallb"
                  items={itemsHoras}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal openModal={openModalCancelar} setOpenModal={setOpenModalCancelar}>
        <div className="modal-alerta-container">
          <div>
            <h4 className=" color-blue-storm">Tu cita se cancelará</h4>
            <p className="dark-gray body2">
              Al continuar la cita que has agendado quedará cancelada. Podrás agendar otra nuevamente. ¿Seguro que
              quieres continuar?
            </p>
            <div className="row justify-content-end">
              <div className="center-first-button mr-3">
                <button type="button" className="btn-medium-secondary" onClick={() => setOpenModalCancelar(false)}>
                  No, regresar
                </button>
              </div>
              <div className="center-second-button mr-4">
                <button type="submit" className="btn-medium">
                  Sí, cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={`${styles['t-container']}`}>
        <div className={`mb-3 body2 ${styles['title-table']}`}>
          <Tooltip message="..." />
          Tus documentos están siendo revisados por nuestro equipo. Te enviaremos un correo electrónico cuando puedas
          continuar con tu proceso.
        </div>
        <table>
          <tr>
            <td className={`body2 ${styles.td}`}>Validar documentos de Obligado Solidario</td>
            <td className={`body2 ${styles.td2}`}>
              <SvgCompletada /> Completada
            </td>
            <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
            <button type="button" className="btn-mini" onClick={() => setOpenModalCancelar(true)}>
              Cancelar
            </button>
          </tr>
          <tr>
            <td className={`body2 ${styles.td}`}>Agendar visita de un ejecutivo a mi obligado solidario</td>
            <td className={`body2 ${styles.td2}`}>
              <SvgEnProceso /> En proceso
            </td>
            <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
            <button type="button" className="btn-mini" onClick={() => setOpenModal(true)}>
              Agendar
            </button>
          </tr>
          <tr>
            <td className={`body2 ${styles.td}`}>Agendar visita de un ejecutivo a mi domicilio </td>
            <td className={`body2 ${styles.td2}`}>
              <SvgEspera /> En espera
            </td>
            <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
            <button disabled type="button" className="btn-mini">
              Agendar
            </button>
          </tr>
          <tr>
            <td className={`body2 ${styles.td}`}>Firma de contrato digital</td>
            <td className={`body2 ${styles.td2}`}>
              <SvgEspera /> En espera
            </td>
            <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
            <Link href="/privado/firma-contrato">
              <button type="button" className="btn-mini">
                Firmar
              </button>
            </Link>
          </tr>
          <tr>
            <td className={`body2 ${styles.td}`}>
              Activar tu token y tu EmpresaNet
              <Tooltip message="..." />
            </td>
            <td className={`body2 ${styles.td2}`}>
              <SvgEspera disabled /> En espera
            </td>
            <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
            <Link href="/privado/activacion-token">
              <button type="button" className="btn-mini">
                Ver
              </button>
            </Link>
          </tr>
        </table>
      </div>
    </>
  );
};

NextStepsTable.propTypes = {
  value: PropTypes.string,
};

NextStepsTable.defaultProps = {
  value: null,
};

export default NextStepsTable;
