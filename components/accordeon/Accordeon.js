import styles from '../../styles/scss/components/Accordeon.module.scss';

export const Accordeon = (props) => {

  let items = props.items.map((item, i) =>
    <div className={['flex-row', 'justify-content-between', styles.content_item].join(' ')} key={i}>
      <div className={'sub text-primary'}>{item.title}</div>
      <div><img src="/plus.svg" alt="Ver más"/></div>
    </div>
    // item.content
  );

  return <div className={styles.content}>
    {items}
  </div>;
};

export default Accordeon;
