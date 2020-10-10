import PropTypes from 'prop-types';
import SvgComponent from '../../svgs/SvgCross';
import useOnClickOutTarget from '../../../hooks/useOnClickOutTarget';
import styles from './modal.module.scss';

const Modal = (props) => {
  const { children, openModal, setOpenModal } = props;
  useOnClickOutTarget('modal', openModal, setOpenModal);

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
