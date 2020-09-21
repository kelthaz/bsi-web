import fs from 'fs';
import path from 'path';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import styles from './aviso-privacidad.module.scss';

const AvisoPrivacidad = (props) => {
  const min = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const { 'fecha-publicacion': fechaPublicacion, 'fecha-vigor': fechaEntradaVigor, title, aviso } = props;

  const generaList = (list, bullet = 'numeric') => {
    let index = 0;
    const final = list.map(({ numeracion, item, subitems }) => {
      index = numeracion ? index + 1 : index;
      const vin = bullet === 'numeric' ? index : min[index - 1];

      return (
        <>
          <p>
            <strong>{numeracion ? `${vin}. ` : ''}</strong>
            {item}
          </p>
          {subitems.length > 0 && generaList(subitems, 'abecedario')}
        </>
      );
    });

    return <div>{final}</div>;
  };

  return (
    <>
      <SimpleBanner>
        <div className="row justify-content-center mx-0">
          <div className={`col-auto my-auto text-center ${styles['banner-title']}`}>
            <h1 className={styles['banner-title-1']}>Aviso</h1>
            <h1 className={styles['banner-title-2']}>de privacidad</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className={`col-auto text-center body1 ${styles['aviso-privacidad-fechas']}`}>
            <div>
              {'Fecha de publicación: '}
              <span>{fechaPublicacion}</span>
            </div>
            <div>
              {'Fecha de entrada en vigor: '}
              <span>{fechaEntradaVigor}</span>
            </div>
          </div>
        </div>
      </SimpleBanner>
      <div className="container">
        <div className={`row m-0 ${styles['terms-box']}`}>
          <div className={`sub ${styles['terms-title']}`}>{title}</div>
          <div>{generaList(aviso)}</div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'data/aviso-privacidad/aviso-privacidad-data.json');
  const posts = JSON.parse(fs.readFileSync(postsDirectory, 'utf8'));
  return {
    props: {
      ...posts,
    },
  };
}

export default AvisoPrivacidad;
