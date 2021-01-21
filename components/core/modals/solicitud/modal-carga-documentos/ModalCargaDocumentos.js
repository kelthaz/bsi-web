import { Modal } from 'bootstrap';
import React from 'react';

const ModalCargaDocumentos = ({ openModal, setOpenModal }) => (
  <Modal openModal={openModal} setOpenModal={setOpenModal}>
    <div className="container px-xs-0 px-md-0 modal-alerta-container">
      <div>
        <h4 className="color-blue-storm">Recomendaciones para tus documentos</h4>
        <p className="dark-gray body2">
          Para garantizar que recibamos tus documentos en la mejor calidad posible, te recomendamos lo siguiente:
        </p>
        <p className="color-blue-sky sub offset-md-3">600 dpi | Formato PDF e imagen</p>
        <p className="dark-gray body2">Si no cuentas con tus documentos escaneados te recomendamos dos opciones:</p>
        <p className="dark-gray body2">1. Ir a un establecimiento a escanearlos.</p>
        <p className="dark-gray body2">
          2. Descarga la app “Microsoft Office Lens” en tu smartphone (iOS y Android) y escanea tus documentos.
        </p>
      </div>
      <div className="flex-column-center-config mt-2">
        <button type="submit" className="btn-big">
          Continuar
        </button>
      </div>
    </div>
  </Modal>
);

export default ModalCargaDocumentos;
