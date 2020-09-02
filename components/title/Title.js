import styles from '../../styles/scss/components/Title.module.scss';

export const Title = (props) => {
  return <div className={styles.box}>
    <img src="/title-left-line.svg" className={styles.line} />
    <div className={styles.text_box}>
      <div className={styles.text}>
        <h2 className={'text-primary'}>{props.linea1}</h2>
        <h2 className={'text-secondary'}>{props.linea2}</h2>
      </div>
    </div>
    <img src="/title-right-line.svg" className={styles.line}/>
  </div>;
};

export default Title;
