import React from 'react';
import PropTypes from 'prop-types';
import styles from './step.module.scss';

const Step = (props) => {
  const { show, currentStep, valipStep, steps } = props;
  const numStep = steps.length;

  const handleStep = (step, action) => {
    if (step !== currentStep) {
      action();
    }
  };

  return (
    show && (
      <div className={styles['container-step']}>
        <p className="button">
          <span className="color-blue-storm">{`${currentStep}/`}</span>
          <span className="color-gray-light">{numStep}</span>
        </p>
        <div className={styles['container-buttons']}>
          {steps.map(({ step, action }) => (
            <button
              type="button"
              key={step}
              className={`${styles.step} ${currentStep === step ? styles['step-active'] : ''}`}
              aria-label="Save"
              onClick={() => {
                handleStep(step, action);
              }}
              disabled={step > valipStep}
            />
          ))}
        </div>
      </div>
    )
  );
};

Step.propTypes = {
  show: PropTypes.bool.isRequired,
  currentStep: PropTypes.number.isRequired,
  valipStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default Step;
