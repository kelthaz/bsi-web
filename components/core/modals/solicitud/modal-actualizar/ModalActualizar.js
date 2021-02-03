import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '../../../../shared/modal/Modal';
import { resetChangePage, onHandleSubmit } from '../../../../../redux/actions/formulario';

const ModalActualizar = ({ as = '/solicitud/[tab]/[step]' }) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { routePage, showModal, isValid } = useSelector((state) => state.formulario);
  const [openModal, setOpenModal] = useState(false);

  const handleModalFirstOption = () => {
    if (isValid) {
      dispatch(onHandleSubmit(true));
      push(as, routePage);
    }
    setOpenModal(false);
  };

  const handleModalSecondOption = () => {
    push(as, routePage);
    setOpenModal(false);
  };

  useEffect(() => {
    if (showModal) {
      setOpenModal(true);
    }
  }, [showModal]);

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => dispatch(resetChangePage())}>
      <div className="modal-alerta-container">
        <h4 className="color-blue-storm">
          {isValid
            ? 'Se han detectado cambios en formulario...'
            : 'Se han detectado cambios con errores en el formulario...'}
        </h4>
        <p className="dark-gray body2">
          {isValid
            ? 'Desea guardar los cambios o descartarlos.'
            : 'Desea permanecer y corregir los errores o desea descartar los cambios.'}
        </p>
        <div className="flex-row-center-config">
          <button type="button" className="btn-medium-secondary mr-2" onClick={handleModalFirstOption}>
            {isValid ? 'Sí, guardar' : 'Sí, corregir'}
          </button>

          <button type="button" className="btn-medium ml-2" onClick={handleModalSecondOption}>
            No, descartar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalActualizar;
