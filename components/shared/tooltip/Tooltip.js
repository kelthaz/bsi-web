import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';
import SvgInformation from '../../svgs/SvgInformation';

const Tooltip = ({ message, position }) => (
  <>
    <span className={styles.tooltip}>
      &nbsp;
      <SvgInformation />
    </span>
    <span
      className={`${styles.tooltiptext} ${position === 'bottom' ? styles['position-bottom'] : styles['position-top']}`}
    >
      {message}
    </span>
  </>
);

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'botttom',
};
export default Tooltip;
