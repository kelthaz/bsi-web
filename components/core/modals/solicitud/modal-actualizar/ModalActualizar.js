import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../../../shared/modal/Modal';
import { resetChangePage } from '../../../../../redux/actions/formulario';

const ModalActualizar = ({ openModal, setOpenModal, formulario }) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { routePage } = useSelector((state) => state.formulario);

  const handleModalFirstOption = () => {
    if (formulario.isValid) {
      formulario.handleSubmit();
      push('/solicitud/[tab]/[step]', routePage);
    }
    setOpenModal(false);
  };

  const handleModalSecondOption = () => {
    push('/solicitud/[tab]/[step]', routePage);
    setOpenModal(false);
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => dispatch(resetChangePage())}>
      <div className="modal-alerta-container">
        <h4 className="color-blue-storm">
          {formulario.isValid
            ? 'Se han detectado cambios en formulario...'
            : 'Se han detectado cambios con errores en el formulario...'}
        </h4>
        <p className="dark-gray body2">
          {formulario.isValid
            ? 'Desea guardar los cambios o descartarlos.'
            : 'Desea permanecer y corregir los errores o desea descartar los cambios.'}
        </p>
        <div className="flex-row-center-config">
          <button type="button" className="btn-medium-secondary mr-2" onClick={handleModalFirstOption}>
            {formulario.isValid ? 'Sí, guardar' : 'Sí, corregir'}
          </button>

          <button type="button" className="btn-medium ml-2" onClick={handleModalSecondOption}>
            No, descartar
          </button>
        </div>
      </div>
    </Modal>
  );
};

ModalActualizar.propTypes = {
  openModal: PropTypes.bool.isRequired,
  formulario: PropTypes.any.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ModalActualizar;
