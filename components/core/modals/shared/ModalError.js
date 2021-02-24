import { useEffect, useState } from 'react';
import useAxiosErrors from '../../../../hooks/useAxiosErrors';
import Modal from '../../../shared/modal/Modal';

const ModalError = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errors, removeError] = useAxiosErrors();

  useEffect(() => {
    if (errors[0] && !openModal) {
      setOpenModal(true);
    }
  }, [errors]);

  console.log(errors);

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => removeError()}>
      <div className="modal-alerta-container">
        {errors[0]?.length > 1 ? (
          <>
            <h4 className="color-blue-storm">Se produjeron los siguientes errores...</h4>
            <p className="dark-gray body2">A continuación te apareceran los errores que debes solucionar:</p>
          </>
        ) : (
          <>
            <h4 className="color-blue-storm">Se produjo el siguiente error...</h4>
            <p className="dark-gray body2">A continuación te aparecerá el error que debes solucionar:</p>
          </>
        )}

        <div className="card-simple-blue-light list-onboarding">
          <ul>
            {errors[0]?.map((msg) => (
              <li>{msg}</li>
            ))}
          </ul>
        </div>
        <div className="flex-row-center-config">
          <button type="button" className="btn-medium mr-2" onClick={() => setOpenModal(false)}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalError;
