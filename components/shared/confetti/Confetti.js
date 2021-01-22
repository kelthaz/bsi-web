import React from 'react';
import PropTypes from 'prop-types';

import styles from './confetti.module.scss';
import Particle from './Particle';

const Confetti = (props) => {

  let { count } = props;
  const particles = [];

  while (count--) {
    particles.push(
      <Particle key={count} />
    );
  }

  return (
    <div className={styles.particles}>
      {particles}
    </div>
  );
};

Confetti.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Confetti;