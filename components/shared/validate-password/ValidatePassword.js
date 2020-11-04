import PropTypes from 'prop-types';
import styles from './validate-password.module.scss';

const ValidatePassword = (props) => {
  const { isValidated } = props;
  return (
    <div className="mb-5">
      <div htmlFor="max-min">
        <img hidden={!isValidated.hiddenMaxMin} src="/check.svg" alt="Check" />
        <span className={`mr-2  ${isValidated.hiddenMaxMin ? styles['hide-check'] : styles['show-check']}`} />
        <span>Deben ser 8 caracteres mínimo y máximo 20</span>
      </div>
      <div htmlFor="min-letter">
        <img hidden={!isValidated.hiddenCapital} src="/check.svg" alt="Check" />
        <span className={`mr-2  ${isValidated.hiddenCapital ? styles['hide-check'] : styles['show-check']}`} />
        <span>Debe tener mínimo 1 letra mayúscula y 1 minúscula</span>
      </div>
      <div htmlFor="min-num">
        <img hidden={!isValidated.minNum} src="/check.svg" alt="Check" />
        <span className={`mr-2  ${isValidated.minNum ? styles['hide-check'] : styles['show-check']}`} />
        <span>Debe tener mínimo 1 número</span>
      </div>
      <div htmlFor="without-num">
        <img hidden={!isValidated.notConsecutives} src="/check.svg" alt="Check" />
        <span className={`mr-2  ${isValidated.notConsecutives ? styles['hide-check'] : styles['show-check']}`} />
        <span>Sin números consecutivos</span>
      </div>
    </div>
  );
};
ValidatePassword.propTypes = {
  isValidated: PropTypes.bool,
};

ValidatePassword.defaultProps = {
  isValidated: false,
};
export default ValidatePassword;
