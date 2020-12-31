/* eslint-disable complexity */
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import TextField from '../../components/shared/text-field/TextField';
import TextArea from '../../components/shared/text-area/TextArea';
import Title from '../../components/shared/titles/title/Title';
import Accordion from '../../components/shared/accordion/Accordion';
import Select from '../../components/shared/select/Select';
import styles from './ayuda.module.scss';
import {
  campoRequerido,
  correoInvalido,
  longitudMaxima,
  numeroInvalido,
  seleccionOpcion,
  captcha,
} from '../../constants/errors';
import AccordionRepositorio from '../../services/simulador/acordeon.repositorio';
import Captcha from '../../components/shared/captcha/Captcha';

const Ayuda = ({ accordion }) => {
  const items = [
    { value: 1, label: 'AGUASCALIENTES' },
    { value: 2, label: 'BAJA CALIFORNIA NORTE' },
    { value: 3, label: 'BAJA CALIFORNIA SUR' },
    { value: 4, label: 'CAMPECHE' },
    { value: 5, label: 'CHIAPAS' },
    { value: 6, label: 'CHIHUAHUA' },
    { value: 7, label: 'CIUDAD DE MEXICO' },
    { value: 8, label: 'COAHUILA' },
    { value: 9, label: 'COLIMA' },
    { value: 10, label: 'DURANGO' },
    { value: 11, label: 'ESTADO DE MEXICO' },
    { value: 12, label: 'GUANAJUATO' },
    { value: 13, label: 'GUERRERO' },
    { value: 14, label: 'HIDALGO' },
    { value: 15, label: 'JALISCO' },
    { value: 16, label: 'MICHOACAN' },
    { value: 17, label: 'MORELOS' },
    { value: 18, label: 'NAYARIT' },
    { value: 19, label: 'NUEVO LEON' },
    { value: 20, label: 'OAXACA' },
    { value: 21, label: 'PUEBLA' },
    { value: 22, label: 'QUERETARO' },
    { value: 23, label: 'QUINTANA ROO' },
    { value: 24, label: 'SAN LUIS POTOSI' },
    { value: 25, label: 'SINALOA' },
    { value: 26, label: 'SONORA' },
    { value: 27, label: 'TABASCO' },
    { value: 28, label: 'TAMAULIPAS' },
    { value: 29, label: 'TLAXCALA' },
    { value: 30, label: 'VERACRUZ' },
    { value: 31, label: 'YUCATAN' },
    { value: 32, label: 'ZACATECAS' },
  ];

  const formulario = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      state: null,
      tellUs: '',
      check: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      phone: Yup.string().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
      tellUs: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
      email: Yup.string().trim().email(correoInvalido).required(campoRequerido),
      state: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      check: Yup.string().required(captcha),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const aboutPymeItems = accordion.filter((accordionItem) => accordionItem.subseccion === 'acerca');

  const userAccount = accordion.filter((accordionItem) => accordionItem.subseccion === 'cuenta');

  const dataSecurity = accordion.filter((accordionItem) => accordionItem.subseccion === 'seguridad');

  const [option, setOption] = useState(1);
  const [nameSelected, setNameSelected] = useState('');
  const [array, setArray] = useState(aboutPymeItems);

  const acc = (
    <div className={styles['container-accordion']}>
      {array.map(({ titulo, contenido }) => (
        <Accordion key={titulo} color="blue" icon="cross" title={titulo} expanded={false}>
          <div>
            <p>{contenido}</p>
          </div>
        </Accordion>
      ))}
    </div>
  );

  const handleOption = (opt, name) => {
    setNameSelected(name);
    setArray(opt);
    setOption(opt);
  };

  return (
    <>
      <form noValidate="novalidate" onSubmit={formulario.handleSubmit}>
        <SimpleBanner showTexture>
          <div className="container">
            <div className="row justify-content-center mx-0">
              <h1 className={`col-xs-12 text-xs-center ${styles.title}`}>CENTRO DE AYUDA</h1>
              <p className={`col-xs-12 col-md-8 text-xs-center px-xs-0 body1 ${styles.bt1}`}>
                Queremos que tomes la mejor decisión con toda la información a tu alcance.
                <strong> Si tienes dudas contáctanos.</strong>
              </p>
            </div>
            <div className="row justify-content-center mt-5 mx-0 ">
              <div className="col-sm-12 col-md-6 mb-5">
                <TextField
                  name="name"
                  format="uppercase"
                  formulario={formulario}
                  size="small"
                  capitalize
                  label="Nombre"
                  type="text"
                  maxlength={60}
                  inverted
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-5">
                <TextField
                  name="email"
                  formulario={formulario}
                  size="small"
                  label="Correo electrónico"
                  type="email"
                  format="email"
                  maxlength={60}
                  inverted
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-5">
                <TextField
                  name="phone"
                  format="phone"
                  formulario={formulario}
                  size="small"
                  label="Número de teléfono"
                  type="tel"
                  inverted
                  maxlength={12}
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-5">
                <Select name="state" label="Estado" formulario={formulario} size="small" items={items} inverted />
              </div>
            </div>
            <div className={`row justify-content-center mx-0 ${styles['text-area-container']}`}>
              <div className={`col-12 ${styles['textarea-questions']}`}>
                <TextArea
                  name="tellUs"
                  formulario={formulario}
                  label="Cuéntanos tus dudas..."
                  maxlength={180}
                  format="textArea"
                />
              </div>
            </div>
          </div>
        </SimpleBanner>
        <div className="container">
          <div className="row d-flex justify-content-center mt-5 mx-xs-0 mx-sm-0">
            <Captcha name="check" formulario={formulario} />
          </div>
        </div>
        <div className="row justify-content-center pt-3 mx-0">
          <div className="col-auto">
            <button disabled={!(formulario.isValid && formulario.dirty)} type="submit" className="btn-small col-12">
              Envía tu comentario
            </button>
          </div>
        </div>
      </form>

      <section>
        <section className="mt-5 mb-5 section-blue-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className=" offset-md-1 col-lg-7 col-md-6 col-sm-12 px-xs-0">
                <div className="d-flex flex-row align-items-center">
                  <div className="mt-5 mb-3 col-8 px-xs-0">
                    <div className="sub text-primary mb-3">Llámanos directo</div>
                    <div className="body2 mb-3">
                      <span>Un ejecutivo responderá todas tus dudas. </span>

                      <a href="tel:5526774690" className="link">
                        5526774690
                      </a>
                    </div>
                  </div>
                  <div className="col-4 pl-xs-4 pl-md-4 pl-lg-0">
                    <img className={`${styles['img-call-center']}`} src="/icon-call-center.svg" alt="Document" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Title linea1="Todo sobre" linea2="crédito digital pyme" />

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div
                name="acerca-del-credito"
                className={`${styles.card}  ${styles['about-pyme-box']} ${option === 1 ? styles.active : ''} ${
                  nameSelected === 'acerca-del-credito' ? styles.active : ''
                }`}
                onClick={() => handleOption(aboutPymeItems, 'acerca-del-credito')}
                role="button"
                tabIndex={0}
              >
                <img src="/about-info.svg" alt="Document" />
                <div>
                  <div
                    className={`sub ${option === 1 ? styles['selected-tittle'] : ''} ${
                      nameSelected === 'acerca-del-credito' ? styles['selected-tittle'] : ''
                    }`}
                  >
                    Acerca del crédito
                  </div>
                  <div className="body2">Todo sobre el Crédito Digital Pyme</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">
                {nameSelected === 'acerca-del-credito' && acc}
              </div>
              <div
                name="cuenta-usuario"
                className={`${styles.card} ${styles['about-pyme-box']} ${
                  nameSelected === 'cuenta-usuario' ? styles.active : ''
                }`}
                onClick={() => handleOption(userAccount, 'cuenta-usuario')}
                role="button"
                tabIndex={0}
              >
                <img src="/user.svg" alt="User" />
                <div>
                  <div className={`sub ${nameSelected === 'cuenta-usuario' ? styles['selected-tittle'] : ''}`}>
                    Cuenta de usuario
                  </div>
                  <div className="body2">Tu sesión y administración</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{nameSelected === 'cuenta-usuario' && acc}</div>
              <div
                name="seguridad-datos"
                className={`${styles.card} ${styles['about-pyme-box']} ${
                  nameSelected === 'seguridad-datos' ? styles.active : ''
                }`}
                onClick={() => handleOption(dataSecurity, 'seguridad-datos')}
                role="button"
                tabIndex={0}
              >
                <img src="/security.svg" alt="Security" />
                <div>
                  <div className={`sub ${nameSelected === 'seguridad-datos' ? styles['selected-tittle'] : ''}`}>
                    Seguridad de datos
                  </div>
                  <div className="body2">Protegemos tu información</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{nameSelected === 'seguridad-datos' && acc}</div>
            </div>
            <div className="col-lg-7 col-md-7 d-lg-block d-md-block d-sm-none d-none">{acc}</div>
          </div>
        </div>
      </section>
    </>
  );
};

Ayuda.propTypes = {
  accordion: PropTypes.any.isRequired,
};

export const getStaticProps = async () => {
  const accordion = await AccordionRepositorio.getAccordionPorSector('ayuda').then((res) => res.data);

  return {
    props: {
      accordion,
    },
  };
};

export default Ayuda;
