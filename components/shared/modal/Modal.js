import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SvgComponent from '../../svgs/SvgCross';
import styles from './modal.module.scss';

const Modal = (props) => {
  const { children, openModal, setOpenModal } = props;
  const setFromEvent = ({ target: targetEvent }) => {
    if (document.getElementById('modal')) {
      setOpenModal(document.getElementById('modal').contains(targetEvent));
    }
  };

  useEffect(() => {
    if (openModal) {
      window.addEventListener('click', setFromEvent);
    }

    return () => {
      window.removeEventListener('click', setFromEvent);
    };
  }, [openModal]);

  return (
    openModal && (
      <div className={styles.modal}>
        <div id="modal" className={styles['modal-content']}>
          <button type="button" className={styles.close} onClick={() => setOpenModal(false)}>
            <SvgComponent />
          </button>
          {children}
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Modal;
