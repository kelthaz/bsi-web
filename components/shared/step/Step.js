import React from 'react';
import styles from './step.module.scss';

const Step = (props) => {
  const { show, numStep = 5, currentStep, setCurrentStep } = props;
  const steps = Array.from(Array(numStep).keys()).map((element) => element + 1);
  console.log(steps);
  return (
    show && (
      <div className={styles['container-step']}>
        <p>
          <span>1/</span>
          <span>5</span>
        </p>
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
    )
  );
};

export default Step;
