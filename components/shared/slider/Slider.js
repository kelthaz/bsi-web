import PropTypes from 'prop-types';
import styles from './slider.module.scss';

const Slider = (props) => {
  const { value, setValue, min, max, step } = props;

  const hundredPercent = max - min;

  return (
    <div className={styles['slide-container']}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => {
          setValue(Number(event.target.value));
        }}
        style={{
          background: `linear-gradient(to right, #81c1ea ${(((value - min) / hundredPercent) * 100) / 3}% , #338cbf ${
            ((((value - min) / hundredPercent) * 100) / 3) * 2
          }%, #225aa7 ${((value - min) / hundredPercent) * 100}%, #dae0e9 ${((value - min) / hundredPercent) * 100}%`,
        }}
        className={styles.slider}
        id="myRange"
      />
    </div>
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
