import React from 'react';
import SvgComponent from '../../svgs/SvgCross';
import styles from './modal.module.scss';
const Modal = (props) => {
  const { children, openModal, setOpenModal } = props;

  return (
    openModal && (
      <div className={styles.modal}>
        <div className={styles['modal-content']}>
          <button type="button" className={styles.close} onClick={() => setOpenModal(false)}>
            <SvgComponent />
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
