import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DATO_PERSONA } from '../../../../../constants/formularios';
import { SIMULADOR_ROUTE } from '../../../../../constants/routes/publico/publico';
import { resetDatosPersonales } from '../../../../../redux/actions/solicitud';
import Modal from '../../../../shared/modal/Modal';
import SvgLogoBanCoppelPymes from '../../../../svgs/logos/SvgLogoBanCoppelPymes';
import SvgCross from '../../../../svgs/SvgCross';
import styles from './header-solicitud.module.scss';

const HeaderSolicitud = ({ formulario }) => {
  const [openModal, setOpenModal] = useState(false);
  const { push } = useRouter();
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(resetDatosPersonales());
    setOpenModal(false);
    push(SIMULADOR_ROUTE);
  };

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="modal-alerta-container">
          <h4 className="color-blue-storm">Estas por salir del proceso...</h4>
          <p className="dark-gray body2">
            {formulario === DATO_PERSONA
              ? 'En este punto tu información no se guardará y deberás comenzar desde el principio si decides retomar tu solicitud. ¿Estás seguro de querer salirte?'
              : 'Tu información se guardará hasta este punto, recuerda que podrás retomar tu proceso en cualquier momento iniciando sesión desde el portal BanCoppel Pymes. ¿Estás seguro de querer salirte?'}
          </p>
          <div className="flex-row-center-config">
            <button type="button" className="btn-medium-secondary mr-2" onClick={handleModal}>
              Sí, salir
            </button>

            <button type="button" className="btn-medium ml-2" onClick={() => setOpenModal(false)}>
              No, continuar
            </button>
          </div>
        </div>
      </Modal>
      <header>
        <div className={styles['container-header']}>
          <SvgLogoBanCoppelPymes />
          <button type="button" className="circle-button-transparent" onClick={() => setOpenModal(true)}>
            <SvgCross className="path-blue-storm" />
          </button>
        </div>
      </header>
    </>
  );
};

HeaderSolicitud.propTypes = {
  formulario: PropTypes.string.isRequired,
};

export default HeaderSolicitud;
