import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { regexMinOneNumber, regexNoConsecutives, regexUpperAndLowerCase } from '../../../constants/regex';
import styles from './validate-password.module.scss';

const ValidatePassword = ({ formulario, field }) => {
  const { values } = formulario;

  const [resultState, setResulState] = useState(false);
  const [validation, setValidation] = useState({
    hiddenMaxMin: true,
    hiddenCapital: true,
    minNum: true,
    notConsecutives: true,
  });

  const textFieldValidated = () => {
    setValidation({
      hiddenMaxMin: !(values[field].length >= 8 && values[field].length <= 20),
      hiddenCapital: !regexUpperAndLowerCase.test(values[field]),
      minNum: !regexMinOneNumber.test(values[field]),
      notConsecutives: !regexNoConsecutives.test(values[field]),
    });
  };

  useEffect(() => {
    textFieldValidated();
    if (values[field] && values[field].length > 0) {
      setResulState(true);
    } else {
      setResulState(false);
    }
  }, [values[field]]);

  return (
    resultState && (
      <div className="mb-5">
        <div htmlFor="max-min">
          <img hidden={validation.hiddenMaxMin} src="/check.svg" alt="Check" />
          <span className={`mr-2  ${!validation.hiddenMaxMin ? styles['hide-check'] : styles['show-check']}`} />
          <span>Deben ser 8 caracteres mínimo y máximo 20</span>
        </div>
        <div htmlFor="min-letter">
          <img hidden={validation.hiddenCapital} src="/check.svg" alt="Check" />
          <span className={`mr-2  ${!validation.hiddenCapital ? styles['hide-check'] : styles['show-check']}`} />
          <span>Debe tener mínimo 1 letra mayúscula y 1 minúscula</span>
        </div>
        <div htmlFor="min-num">
          <img hidden={validation.minNum} src="/check.svg" alt="Check" />
          <span className={`mr-2  ${!validation.minNum ? styles['hide-check'] : styles['show-check']}`} />
          <span>Debe tener mínimo 1 número</span>
        </div>
        <div htmlFor="without-num">
          <img hidden={validation.notConsecutives} src="/check.svg" alt="Check" />
          <span className={`mr-2  ${!validation.notConsecutives ? styles['hide-check'] : styles['show-check']}`} />
          <span>Sin números consecutivos</span>
        </div>
      </div>
    )
  );
};

ValidatePassword.propTypes = {
  formulario: PropTypes.any.isRequired,
  field: PropTypes.string.isRequired,
};

export default ValidatePassword;
