import { useState } from 'react';
import Modal from '../../../../shared/modal/Modal';
import DatalistInput from '../../../../shared/datalist-input/DatalistInput';

import styles from './asignar-casos.module.scss';

import keywordsList from '../../../../../constants/listaEjecutivos';


const AsignarCasos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [ejecutivo, setEjecutivo] = useState('');

  const seleccionarEjecutivo = (item) => {
    setOpenModal(false);
    setEjecutivo(item.text);
  };

  return (
    <>
      {/* Provisional */}
      <h4 className="color-blue-storm">Ejecutivo seleccionado</h4>
      <p className="body2">{ejecutivo || 'Ninguno'}</p>
      {/*  */}
      <button className="btn-medium-secondary" type="button" onClick={() => setOpenModal(true)}>Asignar</button>
      <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => setOpenModal(false)}>
        <div id="modal-asignar-caso" className={styles['modal-container']}>
          <h4 className="color-blue-storm">Asignar caso</h4>
          <p className="body2">
            Elige al ejecutivo al que quieres asignar este caso para su revisión de documentos.
          </p>
          <DatalistInput
            onChange={seleccionarEjecutivo}
            placeholder="Escribe el nombre de supervisor que quieres asignar"
            keywordsList={keywordsList}
            inverted
          />
        </div>
      </Modal>
    </>
  );
};

export default AsignarCasos;