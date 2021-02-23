import { useEffect, useRef } from 'react';
import styles from './confetti.module.scss';

const COLORS = ['#FFBE12', '#225AA7', '#338CBF', '#81C1EA', '#FFBE12'];
const LEFT_OFFSET = 250;

const generateRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));
const generateRandomColor = () => COLORS[generateRandomNumber(0, COLORS.length)];

const Particle = () => {

  const SIZE_RANGE = [10, 25];
  const ROTATION_RANGE = [-180, -15, 15, 30];
  const size = generateRandomNumber(...SIZE_RANGE);
  const style = {
    fill: generateRandomColor(),
    width: size,
    height: size,
    transform: `rotateZ(${generateRandomNumber(...ROTATION_RANGE)}deg)`,
    left: generateRandomNumber(0, window.innerWidth),
    top: generateRandomNumber(-window.innerHeight, 0)
  };
  const elementRef = useRef(null);

  useEffect(() => {
    const { left } = style;
    setTimeout(() => {
      const node = elementRef.current;
      node.style.top = `${window.innerHeight + generateRandomNumber(0, window.innerHeight)}px`;
      node.style.left = `${left + generateRandomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`;
      node.style.transform = `rotateZ(${generateRandomNumber(...ROTATION_RANGE)}deg)`;
    }, 0);
  }, []);

  return (
    <svg
      ref={elementRef}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.particle}
      style={style}
    >
      <path fill={style.fill} d="M2.6713 10.0528C2.14317 10.0528 1.61513 9.84567 1.21126 9.44181C0.403537 8.63408 0.403537 7.31894 1.21126 6.51121L6.93788 0.784629C7.74561 -0.0230989 9.06071 -0.0230989 9.86843 0.784629C10.6762 1.59236 10.6762 2.9075 9.86843 3.71523L4.14182 9.44181C3.7276 9.85603 3.19943 10.0528 2.6713 10.0528Z"/>
    </svg>
  );
};

export default Particle;
