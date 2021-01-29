import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../shared/modal/Modal';
import downloadFile from '../../../../../helpers/downloadFile';
import SimuladorRepositorio from '../../../../../services/simulador/simulador.repositorio';
import dateFormatter from '../../../../../helpers/dateFormatter';

import styles from './modal-tabla-amortizacion.module.scss';

const ModalTablaAmortizacion = ({ dataSimulador, resultSimuladorTabla, openModal, setOpenModal }) => {
  const { monto, plazo, periodicidad } = dataSimulador;

  const handleDownloadTable = async () => {
    const tablaPdf = await SimuladorRepositorio.postSimuladorTablaPdf({
      monto, plazo, periodicidad
    }).then((resp) => resp);
    downloadFile(tablaPdf.data, `Tabla_de_Amortización_${dateFormatter(new Date())}`, 'pdf');
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="container px-xs-0 px-md-0">
        <div className="row justify-content-center mx-0 ">
          <div className="px-3 col-md-12 col-xs-12">
            <h4 className={`${styles['title-input']}`}>Tu tabla de amortización</h4>

            <div className={` ${styles['text-container']}`}>
              Nuestros clientes son lo más importante para nosotros, por lo que siempre estarás asesorado y
              acompañado por nuestro equipo para cualquiera de tus dudas o necesidades. Ya sea por teléfono, correo
              electrónico o chat siempre estaremos pendientes de ti.
            </div>
          </div>
          <div className={`px-0 col-md-12 col-xs-12 mt-4 ${styles['modal-container']}`}>
            <table>
              <thead className={`${styles.thead}`}>
                <tr>
                  <th className={` ${styles.th}`}>Num. Amort.</th>
                  <th className={` ${styles.th}`}>Fecha</th>
                  <th className={` ${styles.th}`}>Capital</th>
                  <th className={` ${styles.th}`}>Intereses</th>
                  <th className={` ${styles.th}`}>Saldo</th>
                  <th className={` ${styles.th}`}>Pago Mensual</th>
                </tr>
              </thead>
              <tbody>
                {resultSimuladorTabla.map(({ numeroAmortizacion, fecha, capital, interes, saldo, pagoMensual }) => (
                  <tr key={numeroAmortizacion}>
                    <td className={`body2 ${styles.td}`}>{numeroAmortizacion}</td>
                    <td className={`body2 ${styles.td}`}>{fecha}</td>
                    <td className={`body2 ${styles.td}`}>{capital}</td>
                    <td className={`body2 ${styles.td}`}>{interes}</td>
                    <td className={`body2 ${styles.td}`}>{saldo}</td>
                    <td className={`body2 ${styles.td}`}>{pagoMensual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-1 px-md-0" />
          <div className="col-md-12 mt-3  text-center">
            <button type="button" className="btn-medium" onClick={handleDownloadTable}>
              Descargar tabla
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalTablaAmortizacion.propTypes = {
  dataSimulador: PropTypes.object.isRequired,
  resultSimuladorTabla: PropTypes.array.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired
};

export default ModalTablaAmortizacion;
