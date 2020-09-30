import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './accordion.module.scss';

const Accordion = (props) => {
  const { children, expanded, title, color, icon } = props;

  const styleAccordion = styles[`accordion-${color}`];
  const styleIcon = styles[`${icon}-icon-${color}`];
  const styleActiveAccordion = styles[`active-${icon}`];
  const [expand, setExpand] = useState(expanded);

  const handleAccordeon = () => {
    setExpand(!expand);
  };

  return (
    <div className={color === 'blue' ? styles.border : ''}>
      <button
        type="button"
        className={`${styleAccordion} ${styleIcon} ${expand ? styleActiveAccordion : ''}`}
        onClick={handleAccordeon}
      >
        {title}
      </button>
      <div className={`${styles.panel} ${expand ? styles['panel-active'] : ''}`}>{children}</div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Accordion;
