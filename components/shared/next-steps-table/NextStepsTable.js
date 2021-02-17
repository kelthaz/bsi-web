import PropTypes from 'prop-types';
import styles from './next-steps-table.module.scss';
import Tooltip from '../tooltip/Tooltip';

const NextStepsTable = ({ value }) => (
  <div className={`${styles['t-container']}`}>
    <div className={`mb-3 body2 ${styles['title-table']}`}>
      <Tooltip message="..." />
      Tus documentos están siendo revisados por nuestro equipo. Te enviaremos un correo electrónico cuando puedas
      continuar con tu proceso.
    </div>
    <table>
      <tr>
        <td className={`body2 ${styles.td}`}>Validar documentos de Obligado Solidario</td>
        <td className={`body2 ${styles.td2}`}>En proceso</td>
        <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
        <button disabled type="button" className="btn-mini">
          Agendar
        </button>
      </tr>
      <tr>
        <td className={`body2 ${styles.td}`}>Agendar visita de un ejecutivo a mi obligado solidario</td>
        <td className={`body2 ${styles.td2}`}>En espera</td>
        <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
        <button disabled type="button" className="btn-mini">
          Agendar
        </button>
      </tr>
      <tr>
        <td className={`body2 ${styles.td}`}>Agendar visita de un ejecutivo a mi domicilio </td>
        <td className={`body2 ${styles.td2}`}>En espera</td>
        <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
        <button disabled type="button" className="btn-mini">
          Agendar
        </button>
      </tr>
      <tr>
        <td className={`body2 ${styles.td}`}>Firma de contrato digital</td>
        <td className={`body2 ${styles.td2}`}>En espera</td>
        <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
        <button disabled type="button" className="btn-mini">
          Firmar
        </button>
      </tr>
      <tr>
        <td className={`body2 ${styles.td}`}>
          Activar tu token y tu EmpresaNet
          <Tooltip message="..." />
        </td>
        <td className={`body2 ${styles.td2}`}>En espera</td>
        <td className={`body2 ${styles.td3}`}>22/09/2020 | 10:30</td>
        <button disabled type="button" className="btn-mini">
          Ver
        </button>
      </tr>
    </table>
  </div>
);

NextStepsTable.propTypes = {
  value: PropTypes.string,
};

NextStepsTable.defaultProps = {
  value: null,
};

export default NextStepsTable;
