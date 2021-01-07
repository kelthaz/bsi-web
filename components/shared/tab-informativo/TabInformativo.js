import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SvgChevron from '../../svgs/SvgChevron';
import styles from './tabInformativo.module.scss';
import { onChangePage } from '../../../redux/actions/formulario';

const TabInformativo = (props) => {
  const dispatch = useDispatch();
  const { show, tabs, currentTab, currentStep, valipStep, steps } = props;
  const [previus, next] = steps.filter(({ step }) => step === currentStep - 1 || step === currentStep + 1);

  const handleButton = (route) => {
    dispatch(onChangePage(true, route));
  };

  return (
    show && (
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-2 flex-row-start-config pr-0">
            {currentStep > 1 && (
              <button className={styles['buttons-arrow']} onClick={() => handleButton(previus.action)} type="button">
                <SvgChevron className="rotate-180" />
                <span className="only-lg-inline">Volver</span>
              </button>
            )}
          </div>
          <div className="col-8 flex-row-center-config p-0">
            <div className={styles['tab-content']}>
              {tabs.map(({ path, label }) => (
                <span key={path} className={`${currentTab === path ? styles['tab-active'] : ''} ${styles['tab-info']}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="col-2 flex-row-end-config pl-0">
            {currentStep < valipStep && (
              <button
                className={styles['buttons-arrow']}
                onClick={next ? () => handleButton(next.action) : () => handleButton(previus.action)}
                type="button"
              >
                <span className="only-lg-inline">Siguiente</span>
                <SvgChevron />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

TabInformativo.propTypes = {
  show: PropTypes.bool.isRequired,
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  valipStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default TabInformativo;
