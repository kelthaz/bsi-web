import PropTypes from 'prop-types';
import SvgCross from '../../svgs/SvgCross';
import useOnClickOutTarget from '../../../hooks/useOnClickOutTarget';
import styles from './modal.module.scss';

const Modal = (props) => {
  const { children, openModal, setOpenModal, closeable, onClose } = props;

  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  useOnClickOutTarget('modal', openModal, handleClose, closeable);

  return (
    openModal && (
      <div className={styles.modal}>
        <div id="modal" className={styles['modal-centered']}>
          <div className={styles['modal-content']}>
            {closeable && (
              <button type="button" className={styles.close} onClick={() => handleClose()}>
                <SvgCross />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeable: PropTypes.bool,
  children: PropTypes.any.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  closeable: true,
  onClose: () => {},
};

export default Modal;
