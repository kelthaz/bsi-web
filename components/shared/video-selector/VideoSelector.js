/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';

import styles from './video-selector.module.scss';

const sliderOptions = [
  {
    id: 1,
    active: true,
    src: 'https://www.youtube.com/watch?v=mJZYMWDL_0o&feature=youtu.be',
    title: 'Ismael García López / Nuevo Grupo Visual SA de CV',
    subtitle: 'Atención cálida para asegurar tu futuro | BanCoppel Pymes',
    parragraph:
      'En BanCoppel procuramos atenderte de una manera cálida y humana para que tu empresa tenga la estabilidad económica que necesita a través de un proceso ágil y personalizado asegurando así, el flujo de capital necesario para avanzar hacia el futuro. Ingresa a www.bancoppel.com/empresas y conoce todo lo que tenemos para tí.',
  },
  {
    id: 2,
    active: false,
    src: 'https://www.youtube.com/watch?v=VayHlVwGmGs&feature=youtu.be',
    title: 'Óscar Vélez González / PIZZETA SA de CV ',
    subtitle: 'Somos el aliado que tu empresa necesita | BanCoppel Pymes',
    parragraph:
      'Nos aseguramos de que tengas una verdadera buena experiencia con nosotros para que puedas crecer como tu empresa lo merece. Ingresa a www.bancoppel.com/empresas y conoce todo lo que tenemos para tí.',
  },
  {
    id: 3,
    active: false,
    src: 'https://www.youtube.com/watch?v=7DOtcx4pnuo&feature=youtu.be',
    title: 'Sandra Quintana / Compupartes y Accesorios SA de CV ',
    subtitle: 'No dejes ir ningún proyecto por falta de liquidez | BanCoppel Pymes',
    parragraph:
      'Queremos ser los artífices de tu futuro, por lo que te ofrecemos un crédito ajustado a tus necesidades. ¿Necesitas escalar tus operaciones? Ponte en contacto con nosotros ingresando a www.bancoppel.com/empresas y te ayudaremos a hacer tus sueños realidad.',
  },
  {
    id: 4,
    active: false,
    src: 'https://www.youtube.com/watch?v=ELgjL7oe8AY&feature=youtu.be',
    title: 'Alberto Kichik Sidauy / CAMISAS IMPALA SA de CV ',
    subtitle: 'Estamos ahí para tu crecimiento | BanCoppel Pymes',
    parragraph:
      'En BanCoppel estamos ahí para tu crecimiento, y procuraremos que, con empatía y humanidad, ser los propulsores de tu éxito. Ponte en contacto con nosotros en www.bancoppel.com/empresas.',
  },
  {
    id: 5,
    active: false,
    src: 'https://www.youtube.com/watch?v=ppIJmaa9ue8&feature=youtu.be',
    title: 'Antonio Barón / TECNOSOCKS SA de CV ',
    subtitle: 'Sabemos escucharte | BanCoppel Pymes',
    parragraph:
      'En BanCoppel, estamos dispuestos a escucharte y brindarte la atención que necesitas. Si quieres que tu pyme alcance el éxito, no dudes en ponerte en contacto con nosotros. www.bancoppel.com/empresas.',
  },
  {
    id: 6,
    active: false,
    src: 'https://www.youtube.com/watch?v=PMP6zcY6Fcc&feature=youtu.be',
    title: 'Rubén Fresan / BEER- LINMEX SA de CV',
    subtitle: 'Te ofrecemos un trato cálido, cercano y entendemos tus necesidades',
    parragraph:
      'En BanCoppel, no solo las condiciones crediticias son importantes, también te ofrecemos un trato cálido y cercano para no te sientas solo en tu camino al éxito. No dudes en ponerte con nosotros: www.bancoppel.com/empresas.',
  },
];

const VideoSelector = ({ color }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const updateSlide = (direction) => {
    const updateSlidePosition = currentSlide;
    let copySliderOptions = {};

    if (direction === 'next') {
      copySliderOptions = {
        ...sliderOptions[updateSlidePosition],
      };
      sliderOptions[updateSlidePosition - 1].active = false;
      copySliderOptions.active = true;
      Object.assign(sliderOptions[currentSlide], copySliderOptions);
    }

    if (direction === 'prev') {
      copySliderOptions = {
        ...sliderOptions[updateSlidePosition - 2],
      };
      sliderOptions[updateSlidePosition - 1].active = false;
      copySliderOptions.active = true;
      Object.assign(sliderOptions[updateSlidePosition - 2], copySliderOptions);
    }
  };

  const slideHandler = (direction) => {
    if (direction === 'next' && currentSlide < sliderOptions.length) {
      setCurrentSlide((prevState) => prevState + 1);
      updateSlide(direction);
    }
    if (direction === 'prev' && currentSlide > 1) {
      setCurrentSlide((prevState) => prevState - 1);
      updateSlide(direction);
    }
  };

  const renderSlider = sliderOptions.map((option) => (
    <div key={option.id} className={`${option.active ? 'd-block ' : 'd-none'} ${currentSlide}`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
        <div className={styles['video-preview']}>
          <iframe className={styles.video} src={option.src} start="100" frameBorder="0" />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 offset-lg-6 offset-md-6  ">
        <div className="ml-xs-0 ml-md-4 ml-lg-0">
          <h4 className={color === 'blue-storm' ? 'text-white' : 'text-primary'}>{option.title}</h4>
          {option.subtitle && <p className={styles['text-gray']}>{option.subtitle}</p>}
          <p className={`body2 ${color === 'blue-storm' ? 'text-white' : 'text-dark'}`}>{option.parragraph}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={`${styles['video-carrousel']} card-simple-${color}`}>
      <div style={{ display: 'flex' }}>{renderSlider}</div>

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row justify-content-md-end justify-content-xs-center">
          <button
            type="button"
            className={`mr-3 ${styles.a} ${styles.next} ${styles.round} ${
              color === 'blue-storm' && styles['btn-blue-morning']
            }`}
            onClick={() => slideHandler('prev')}
          >
            &#10094;
          </button>
          <button
            type="button"
            className={`${styles.a} ${styles.next} ${styles.round} ${
              color === 'blue-storm' && styles['btn-blue-morning']
            }`}
            onClick={() => slideHandler('next')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector;
