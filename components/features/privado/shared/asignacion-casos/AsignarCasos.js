import { useState } from 'react';
import useSearchEngine from '../../../../../hooks/useSearchEngine';
import Modal from '../../../../shared/modal/Modal';
import TextFieldSB from '../../../../shared/text-field-sb/TextFieldSB';

import styles from './asignar-casos.module.scss';

import keywordsList from '../../../../../constants/listaEjecutivos.json';


const AsignarCasos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [ejecutivo, setEjecutivo] = useState('');

  const handler = (evt) => {
    setValue(evt.target.value);
  };

  const seleccionarEjecutivo = (item) => {
    setOpenModal(false);
    setValue('');
    setEjecutivo(item.text);
  };

  useSearchEngine(value, setData, keywordsList.keywords);

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
          <TextFieldSB
            value={value}
            onChange={handler}
            placeholder="Escribe el nombre de supervisor que quieres asignar"
            inverted
          />
          {data.length > 0 && (
            <ul className={styles['select-items']}>
              {data.map((item) => (
                <li key={item.text}>
                  <button disabled={item.disabled} className={styles.item} type="button" onClick={() => seleccionarEjecutivo(item)}>
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AsignarCasos;