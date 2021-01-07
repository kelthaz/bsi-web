import React, { useState } from 'react';
import Modal from '../../../../shared/modal/Modal';

const ModalSalir = () => {
  const [openModal, setOpenModal] = useState(true);

  const handleModalFirstOption = () => {
    setOpenModal(false);
  };

  const handleModalSecondOption = () => {
    setOpenModal(false);
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="modal-alerta-container">
        <h4 className="color-blue-storm">Se han detectado cambios en formulario...</h4>
        <p className="dark-gray body2">Desea guardar los cambios o descartarlos.</p>
        <div className="flex-row-center-config">
          <button type="button" className="btn-medium-secondary mr-2" onClick={handleModalFirstOption}>
            Sí, guardar
          </button>

          <button type="button" className="btn-medium ml-2" onClick={handleModalSecondOption}>
            No, descartar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSalir;
