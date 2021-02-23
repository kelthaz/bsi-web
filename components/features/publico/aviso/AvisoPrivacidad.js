import PropTypes from 'prop-types';
import SimpleBanner from '../../../shared/banners/simple-banner/SimpleBanner';
import SvgSeptimaTextura from '../../../svgs/texturas/SvgSeptimaTextura';
import styles from './aviso-privacidad.module.scss';

const AvisoPrivacidad = ({ avisoItems }) => {
  const { fechaPublicacion, fechaVigor, titulo, aviso } = avisoItems;

  return (
    <>
      <div className="svg-textura-center-top">
        <SvgSeptimaTextura />
      </div>
      <SimpleBanner>
        <div className="row justify-content-center mx-0">
          <div className={`col-auto my-auto text-center ${styles['banner-title']}`}>
            <h1 className={styles['banner-title-1']}>Aviso</h1>
            <h1 className={styles['banner-title-2']}>de privacidad</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className={`col-auto text-center body1 ${styles['aviso-privacidad-fechas']}`}>
            <h4>
              <span>Fecha de publicación: </span>
              <br className="only-xs" />
              <span>{fechaPublicacion}</span>
            </h4>
            <h4>
              <span>Fecha de entrada en vigor: </span>
              <br className="only-xs" />
              <span>{fechaVigor}</span>
            </h4>
          </div>
        </div>
      </SimpleBanner>
      <div className="container">
        <div className={`row m-0 ${styles['terms-box']}`}>
          <div className={`sub ${styles['terms-title']}`}>{titulo}</div>
          {aviso.map(({ enumeracion, item }) => (
            <p key={item}>
              {enumeracion && <strong>{enumeracion}&nbsp;</strong>}
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

AvisoPrivacidad.propTypes = {
  avisoItems: PropTypes.any.isRequired,
};

export default AvisoPrivacidad;
