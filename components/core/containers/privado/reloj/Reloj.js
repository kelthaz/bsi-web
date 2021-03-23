import React from 'react';
import useClock from '../../../../../hooks/useClock';
import styles from './reloj.module.scss';

const Reloj = ({ primerNombre = 'Jesus' }) => {
  const [stateTime, date, time] = useClock();
  console.log('asd');
  return (
    <div className={styles['container-reloj']}>
      <span>Hola {`${primerNombre}, ${stateTime}.`}</span>
      <span>{`${date} - ${time}`}</span>
    </div>
  );
};

export default Reloj;
