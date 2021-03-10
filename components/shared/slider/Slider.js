import PropTypes from 'prop-types';
import styles from './slider.module.scss';

const Slider = ({ name, value, onChange, onBlur, min, max, step }) => {
  const hundredPercent = max - min;

  return (
    <div className={styles['slide-container']}>
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          background: `linear-gradient(to right, #81c1ea ${(((value - min) / hundredPercent) * 100) / 3}% , #338cbf ${
            ((((value - min) / hundredPercent) * 100) / 3) * 2
          }%, #225aa7 ${((value - min) / hundredPercent) * 100}%, #dae0e9 ${((value - min) / hundredPercent) * 100}%`,
        }}
        className={styles.slider}
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
