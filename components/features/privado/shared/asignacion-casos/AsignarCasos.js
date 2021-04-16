import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../shared/modal/Modal';
import DatalistInput from '../../../../shared/datalist-input/DatalistInput';

import styles from './asignar-casos.module.scss';

import keywordsList from '../../../../../constants/listaEjecutivos';

const AsignarCasos = ({ tableButton }) => {
  const [openModal, setOpenModal] = useState(false);
  const [ejecutivo, setEjecutivo] = useState('');
  const [preEjecutivo, setPreEjecutivo] = useState('');

  const preSeleccionarEjecutivo = (item) => {
    setPreEjecutivo(item.text);
  };

  const seleccionarEjecutivo = () => {
    setEjecutivo(preEjecutivo);
    setOpenModal(false);
  };

  return (
    <>
      {/* Provisional */}
      {tableButton === false ? <h4 className="color-blue-storm">Ejecutivo seleccionado</h4> : ''}
      {tableButton === false ? <p className="body2">{ejecutivo || 'Ninguno'}</p> : ''}
      {/*  */}
      <button className="btn-medium-secondary" type="button" onClick={() => setOpenModal(true)}>
        Asignar
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => setOpenModal(false)}>
        <div id="modal-asignar-caso" className={styles['modal-container']}>
          <h4 className="color-blue-storm">Asignar caso</h4>
          <p className="body2">Elige al ejecutivo al que quieres asignar este caso para su revisión de documentos.</p>
          <DatalistInput
            onChange={preSeleccionarEjecutivo}
            placeholder="Escribe el nombre de supervisor que quieres asignar"
            keywordsList={keywordsList}
            inverted
          />
          <div className="mt-3 text-center">
            <button type="button" className="btn-medium" onClick={seleccionarEjecutivo}>
              Asignar caso
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

AsignarCasos.propTypes = {
  tableButton: PropTypes.bool,
};

AsignarCasos.defaultProps = {
  tableButton: false,
};
export default AsignarCasos;
