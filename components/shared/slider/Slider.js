import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './slider.module.scss';

const Slider = (props) => {
  const { name, formulario, min, max, step } = props;
  const { setFieldValue, values, setFieldTouched } = formulario;
  const hundredPercent = max - min;

  useEffect(() => {
    setFieldTouched(name, true);
  }, []);

  const handleValue = (event) => {
    setFieldValue(name, event.target.value);
  };

  return (
    <div className={styles['slide-container']}>
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[name]}
        onChange={handleValue}
        style={{
          background: `linear-gradient(to right, #81c1ea ${
            (((values[name] - min) / hundredPercent) * 100) / 3
          }% , #338cbf ${((((values[name] - min) / hundredPercent) * 100) / 3) * 2}%, #225aa7 ${
            ((values[name] - min) / hundredPercent) * 100
          }%, #dae0e9 ${((values[name] - min) / hundredPercent) * 100}%`,
        }}
        className={styles.slider}
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
