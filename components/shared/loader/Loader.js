import styles from './loader.module.scss';
import SvgLogoBanCoppelPymes from '../../svgs/logos/SvgLogoBanCoppelPymes';
import useAxiosLoader from '../../../hooks/useAxiosLoader';

const Loader = () => {
  const [loading] = useAxiosLoader();

  return (
    loading && (
      <div className={styles['container-loader']}>
        <div className={styles.spinner} />
        <SvgLogoBanCoppelPymes />
      </div>
    )
  );
};

export default Loader;
