import PropTypes from 'prop-types';
import SvgCross from '../../svgs/SvgCross';
import useOnClickOutTarget from '../../../hooks/useOnClickOutTarget';
import styles from './modal.module.scss';

const Modal = (props) => {
  const { children, openModal, setOpenModal, closModalIcon = false } = props;
  useOnClickOutTarget('modal', openModal, setOpenModal);

  return (
    openModal && (
      <div className={styles.modal}>
        <div id="modal" className={styles['modal-centered']}>
          <div className={styles['modal-content']}>
            {closModalIcon === false ?
              <button type="button" className={styles.close} onClick={() => setOpenModal(false)}>
                <SvgCross />
              </button> : <span />}
            {children}
          </div>
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
