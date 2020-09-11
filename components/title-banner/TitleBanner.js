import styles from './title-banner.module.scss';

export const TitleBanner = (props) => {
  return <div className={styles.box}>
    <div className={styles.title_container}>
      <div className={`col-md d-none d-md-block ${styles.line}`}>
        <img src="./title-banner-line.svg"></img>
      </div>
      <div className={'col-md'}>
        <div className={`row ${styles.text}`}>
          <h1 className={'text-primary'}>{props.linea1}</h1>
          <h1 className={'text-secondary'}>{props.linea2}</h1>
        </div>
        <div className={`row ${styles.sub_text}`}>
          <p className={'sub'}>{props.description}</p>
        </div>
      </div>
    </div>
  </div>;
};

export default TitleBanner;
