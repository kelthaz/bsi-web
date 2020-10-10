import React from 'react';
import styles from './step.module.scss';

const Step = (props) => {
  const { show, numStep = 5, currentStep, setCurrentStep } = props;
  const steps = Array.from(Array(numStep).keys()).map((element) => element + 1);

  return (
    show && (
      <div className={styles['container-step']}>
        <p className="button">
          <span className="color-blue-storm">{`${currentStep}/`}</span>
          <span className="color-gray-light">{numStep}</span>
        </p>
        <div className={styles['container-buttons']}>
          {steps.map((step) => (
            <button
              type="button"
              key={step}
              className={`${styles.step} ${currentStep === step ? styles['step-active'] : ''}`}
              aria-label="Save"
              disabled={currentStep !== step}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Step;
