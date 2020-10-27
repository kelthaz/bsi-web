import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BannerInicio from '../../components/core/banners/BannerInicio';
import styles from './inicio.module.scss';
import Select from '../../components/shared/select/Select';
import Title from '../../components/shared/titles/title/Title';
import mexicanWeightFormatter from '../../helpers/moneyFormatter';
import Slider from '../../components/shared/slider/Slider';
import VideoSelector from '../../components/shared/video-selector/VideoSelector';

export const Home = () => {
  const [menuOpen] = useState(false);
  const [valueSlider, setValueSlider] = useState(2000000);
  const [minValue] = useState(0);

  const itemsPaymentMonths = ['12 meses', '18 meses', '24 meses', '30 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrales'];
  const itemsCompanyTime = ['Más de 2 años', 'Menos de 2 años'];
  const itemsSalesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const formulario = useFormik({
    initialValues: {
      paymentMonths: 'Seleccione...',
      paymentTimes: 'Seleccione...',
      companyTime: 'Seleccione...',
      salesYear: 'Más de $2 MDP',
    },
    validationSchema: Yup.object({
      paymentMonths: Yup.string().notOneOf(['Seleccione...'], 'Selecciona una opción'),
      paymentTimes: Yup.string().notOneOf(['Seleccione...'], 'Selecciona una opción'),
      companyTime: Yup.string().notOneOf(['Seleccione...'], 'Selecciona una opción'),
      salesYear: Yup.string().notOneOf(['Seleccione...'], 'Selecciona una opción'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [resultState, setResulState] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (
      formulario.values.paymentMonths === 'Seleccione...' ||
      formulario.values.paymentTimes === 'Seleccione...' ||
      formulario.values.companyTime === 'Seleccione...' ||
      formulario.values.salesYear === 'Seleccione...'
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  return (
    <>
      <BannerInicio />
      <article>
        <section className="section-blue-storm">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className={`mt-5 col-lg-12 text-center ${styles['color-white']}`}>DISEÑADO PARA</h2>
              <h2 className={`col-lg-12 text-center ${styles['color-blue-morning']}`}>SER MÁS SIMPLE</h2>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-7 col-md-6 col-xs-12 mb-lg-3">
                <div className={`body2 text-center ${styles['color-white-text']}`}>
                  El proceso de solicitud entiende tu ritmo de trabajo y lo diseñamos para que en cuatro pasos lo
                  completes:
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-xs-4 mt-lg-0">
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mr-xs-0 mt-lg-3 ">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Persona.svg" />
                  <div>
                    <h4>Datos personales</h4>
                    <p className={`${styles['color-white-text']}`}>para conocerte mejor</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-xs-2 mt-lg-3 ">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Empresa.svg" />
                  <div>
                    <h4>Datos de tu empresa</h4>
                    <p className={`body2 ${styles['color-white-text']}`}> platícanos sobre ella </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-xs-2 mt-lg-3">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Oferta.svg" />
                  <div>
                    <h4>Conoce tu oferta</h4>
                    <p className={`body2  ${styles['color-white-text']}`}>cuánto te otorgamos</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-lg-3 mt-xs-2">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Documentos.svg" />
                  <div>
                    <h4>Documentación</h4>
                    <p className={`  ${styles['color-white-text']}`}>carga unos archivos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-5 col-md-6 mt-lg-5 mt-xs-3 mx-xs-2 px-xs-0 mx-lg-0 px-lg-3">
                <div className={`row mb-sm-4 ${styles['design-pipe']}`}>
                  <p className={` col-md-8 col-lg-9 col-sm-9 col-xs-9 px-xs-0 px-lg-4 ${styles['color-white-text']}`}>
                    En el primer bloque de tu solicitud sólo necesitarás tener a la mano el RFC con el que facturas.
                  </p>
                  <div className="col-md-4 col-lg-3 col-sm-3 col-xs-3 px-lg-0">
                    <img alt="" src="/RFC.svg" />
                  </div>
                  <div className="col-md-12  mb-xs-4 mb-lg-0 px-xs-0 px-lg-4">
                    <Link href="credito-pyme">
                      <button className="btn-link-white" type="button">
                        Leer más sobre el crédito
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mt-md-0 mt-lg-5 px-xs-0 px-lg-5 ">
                <div className="row mt-sm-1 mt-md-0 mt-xs-4 mb-lg-4">
                  <p
                    className={`body2 d-none d-md-block col-md-9 col-sm-9 col-xs-8 col-lg-9 px-md-0 ${styles['color-white-text']}`}
                  >
                    Ten en cuenta que conforme vayas avanzando, solicitaremos un poco más de información y documentos.
                  </p>
                  <p
                    className={`d-sm-block d-md-none col-md-9 col-sm-9 col-xs-9 col-lg-8 ${styles['color-white-text']}`}
                  >
                    Conforme vayas avanzando, solicitaremos un poco más de información y documentos.
                  </p>
                  <div className="col-md-3 col-sm-3 col-xs-3 col-lg-2 pr-xs-5 pr-sm-0 pr-md-0 text-md-right">
                    <img alt="" src="/Archivos.svg" />
                  </div>
                  <div className="col-md-8 ml-lg-0 ml-md-0 ml-xs-3 mb-xs-3 px-xs-0 px-lg-1">
                    <Link href="requisitos">
                      <button className="btn-link-white" type="button">
                        Ver todos los requisitos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container mt-5 mb-5 ">
                <div className="row  justify-content-center">
                  <div className="col-lg-12 col-md-12 col-xs-12 text-center">
                    <h2 className={`${styles['color-white']}`}>SIMULA TU CRÉDITO PYME</h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mt-3 text-center px-xs-0">
                    <p className={`body2 ${styles['color-white-text']}`}>
                      Con la información que nos proporciones podremos diseñar una oferta que se ajuste a las
                      necesidades de tu negocio.
                    </p>
                    <br />
                    <p className={`body2 ${styles['color-white-text']}`}>
                      Requisitos mínimos: Tener más de 2 años operando y facturar más de 2 MDP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className={`container px-xs-0 px-md-5 ${styles['simulator-info']}`}>
            <span className={styles['chunk-box']} />
            <div className={styles['simulator-content']}>
              <h1 className={` ${styles['title-top']}`}>¿Cuánto dinero necesitas?</h1>
              <div className="row mx-md-0 mb-5 mt-2">
                <div className="justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2">
                  <div className={` col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center ${styles['value-side']}`}>
                    <div className={` col-xs-12 col-sm-12 col-md-12 col-lg-12 ${styles['value-side']}`}>
                      <div className="row justify-content-center">
                        <div className={`d-none d-sm-block mr-sm-2 mr-md-4  ${styles['title-value-simulator']} `}>
                          Necesito
                        </div>
                        <p>{mexicanWeightFormatter(valueSlider)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-12 px-xs-4 p-md-0">
                  <Slider value={valueSlider} setValue={setValueSlider} min={minValue} max={12000000} step={100000} />
                </div>
                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-lg-0  ">
                  <h1 className={`text-xs-center text-md-left  ${styles['title-input']}`}>
                    ¿En cuántos meses quieres pagarlo?
                  </h1>
                  <div className="d-flex align-items-start ">
                    <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>
                      Quiero pagarlo en
                    </div>
                    <div className="col-xs-12 col-md-7 p-md-0">
                      <Select name="paymentMonths" formulario={formulario} size="small" items={itemsPaymentMonths} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
                  <h2 className={`text-xs-center text-md-left ${styles['title-input']}`}>
                    ¿Cómo quieres que sean tus plazos?
                  </h2>
                  <div className="d-flex align-items-start ">
                    <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block  ${styles['input-text']}`}>
                      Quiero plazos
                    </div>
                    <div className="col-xs-12 col-md-7 p-md-0">
                      <Select name="paymentTimes" formulario={formulario} size="small" items={itemsPaymentTimes} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-lg-0 ">
                  <h2 className={`text-xs-center text-md-left  ${styles['title-input']}`}>
                    ¿Cuál es la antigüedad de tu empresa?
                  </h2>
                  <div className="d-flex align-items-start ">
                    <div className={`col-xs-4 col-md-4 p-lg-0 px-xs-0 d-none d-md-block ${styles['input-text']}`}>
                      Mi empresa tiene
                    </div>
                    <div className="col-xs-12 col-md-7 p-md-0">
                      <Select name="companyTime" formulario={formulario} size="small" items={itemsCompanyTime} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
                  <h2 className={`text-xs-center  text-md-left ${styles['title-input']}`}>
                    ¿Cuánto vendes anualmente?
                  </h2>
                  <div className="d-flex align-items-start ">
                    <div className={`col-xs-4 col-sm-6 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>
                      Al año vendo
                    </div>
                    <div className="col-xs-12  col-md-7 p-md-0">
                      <Select name="salesYear" formulario={formulario} size="small" items={itemsSalesYear} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-5 mt-4 ">
                <div className="order-xs-2 text-xs-center  order-md-1 mr-md-5 mr-lg-0 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-5 mr-xs-0 ">
                  <button
                    type="button"
                    className={` ${menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}`}
                  >
                    Retoma tu proceso
                  </button>
                </div>
                <div className="order-xs-1 text-xs-center order-md-2 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-3 ">
                  <button
                    type="button"
                    onClick={() => setResulState((resultState) => !resultState)}
                    disabled={disabled}
                    className={` ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}
                  >
                    Simula tu crédito
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row mb-5">
              <div
                className={`text-xs-center text-md-left col-md-6 col-xs-12 mt-5 px-xs-0 ${styles['title-benefits']}`}
              >
                <h2 className={`text-primary mt-md-5 ${styles.subtitle}`}>BENEFICIOS PARA TI</h2>
                <h2 className={`text-secondary ${styles.subtitle}`}>Y TU EMPRESA</h2>
                <p>Conoce las características que nuestros clientes aprovechan para hacer crecer sus empresas.</p>
                <div className="ml-xs-5 ml-md-0">
                  <Link href="beneficios">
                    <button className="ml-sm-5 ml-md-0 btn-link-blue-sky" type="button">
                      Leer más sobre los beneficios
                    </button>
                  </Link>
                </div>
              </div>
              <div className={`d-none d-md-block d-xl-none col-md-6 col-lg-6 mb-5 px-0 ${styles['circle-container']}`}>
                <Link href="beneficios">
                  <a className={`col-md-6 col-lg-6 ${styles.circle1} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Tasas atractivas</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 ${styles.circle2} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Crecer tu negocio</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6  ${styles.circle3} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Apoyo constante</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 ${styles.circle4} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Cuenta y banca en línea</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 col-lg-6 ${styles.circle5} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Flujo de operación</span>
                  </a>
                </Link>
                <div className="row mt-md-0 mt-lg-5 justify-content-center">
                  <img
                    className={`col-md-8 col-lg-8 ${styles['image-home']}`}
                    src="/home-company-image.png"
                    alt="Hombre"
                  />
                </div>
              </div>
              <div className={`d-block d-md-none col-md-6 mb-5 text-center ${styles['circle-container']}`}>
                <div className="row">
                  <Link href="beneficios">
                    <a className={`col-12 mt-4 ${styles['text-links']}`}>Cuenta y banca en línea</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Apoyo constante</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Flujo de operación</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Crecer tu negocio</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Tasas atractivas</a>
                  </Link>
                </div>

                <div className="row mt-md-5 justify-content-center">
                  <img
                    className={`d-block d-sm-block d-md-none col-md-6 ${styles['image-home']}`}
                    src="/chica-mobile.png"
                    alt="Hombre"
                  />
                </div>
              </div>
            </div>
          </div>
          <Title className="mt3" linea1="EMPRESARIOS COMO TÚ" />

          <div className="container">
            <div className="row justify-content-center mt-3 mb-5">
              <div>Ya confiaron en nosotros </div>
              <div className="text-xs-center text-md-left col-lg-10 col-xs-12 mt-5 mb-5  px-xs-0 px-md-3 ">
                <VideoSelector color="blue-light" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
