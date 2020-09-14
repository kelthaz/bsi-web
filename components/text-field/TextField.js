import styles from './text-field.module.scss';

export const TextField = (props) => {
  return <div className={styles.group}>
    <input className={styles.input} type="text" required/>
    <span className={styles.highlight}></span>
    <span className={styles.bar}></span>
    <label className={`body2 ${styles.label}`}>{props.label}</label>
  </div>;
};

export default TextField;
