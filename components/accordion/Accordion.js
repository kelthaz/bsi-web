import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './accordion.module.scss';

const Accordion = (props) => {
  const { children, expanded, title, type } = props;

  const styleAccordion = type === 'blue' ? styles['accordion-blue'] : styles['accordion-white'];
  const styleActiveAccordion = type === 'blue' ? styles['active-blue'] : styles['active-white'];
  const [expand, setExpand] = useState(expanded);

  const handleAccordeon = () => {
    setExpand(!expand);
  };

  return (
    <div className={type === 'blue' ? styles.border : ''}>
      <button
        type="button"
        className={`${styleAccordion} ${expand ? styleActiveAccordion : ''}`}
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
  type: PropTypes.string.isRequired,
};

export default Accordion;
