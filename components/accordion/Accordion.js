/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './accordion.module.scss';

const Accordion = (props) => {
  const { children, expanded, title } = props;

  const [expand, setExpand] = useState(expanded);

  const handleAccordeon = () => {
    setExpand(!expand);
  };

  return (
    <>
      <button type="button" className={`${styles.accordion} ${expand ? styles.active : ''}`} onClick={handleAccordeon}>
        {title}
      </button>
      <div className={`${styles.panel} ${expand ? styles['panel-active'] : ''}`}>{children}</div>
    </>
  );
};

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default Accordion;
