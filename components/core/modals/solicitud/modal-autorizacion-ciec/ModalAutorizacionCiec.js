import React from 'react';
import Modal from '../../../../shared/modal/Modal';
import SvgPrivacidad from '../../../../svgs/SvgPrivacidad';

const ModalAutorizacionCiec = ({ openModal, setOpenModal }) => (
  <Modal openModal={openModal} setOpenModal={setOpenModal}>
    <div className="modal-container-video px-xs-0 px-md-0">
      <h4 className="color-blue-storm">¿Qué es la CIEC y por qué solicitamos esto?</h4>
      <p className="dark-gray body2">
        Tu historial crediticio nos ayuda a diseñar tu oferta en segundos, por lo que requerimos tus credenciales del
        SAT para que firmes la autorización y poder consultarlo.
      </p>
      <p className="sub color-gray">
        <SvgPrivacidad /> Tus datos estarán protegidos.
      </p>
      <iframe
        className="modal-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/r7HHOYZQb4M"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="¿Qué es la CIEC y por qué solicitamos esto?"
      />
    </div>
  </Modal>
);

export default ModalAutorizacionCiec;
