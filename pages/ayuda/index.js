import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import Link from 'next/link';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import TextField from '../../components/shared/text-field/TextField';
import TextArea from '../../components/shared/text-area/TextArea';
import Title from '../../components/shared/titles/title/Title';
import Accordion from '../../components/shared/accordion/Accordion';
import Select from '../../components/shared/select/Select';
import styles from './ayuda.module.scss';
import { campoRequerido, correoInvalido, longitudMaxima, numeroInvalido } from '../../constants/errors';

const Ayuda = () => {
  const items = ['Aguascalientes', 'Bajo California Norte', 'Bajo California Sur'];
  const [option, setOption] = useState(1);
  const [checked, setChecked] = useState(false);

  const formulario = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      state: 'Estado',
      tellUs: '',
      check: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      phone: Yup.string().trim().min(10, numeroInvalido).max(10, numeroInvalido).required(campoRequerido),
      tellUs: Yup.string().trim().max(140, longitudMaxima).required(campoRequerido),
      email: Yup.string().trim().email(correoInvalido).required(campoRequerido),
      state: Yup.string().notOneOf(['Estado'], 'Selecciona una opción'),
      check: Yup.boolean().required(campoRequerido),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const aboutPymeItems = [
    {
      title: '¿Por qué no puedo usar mi propia cuenta bancaria para el depósito?',
      content:
        'Debido al tipo de crédito que estás solicitando, por normatividad interna, es necesario que cuentes con una cuenta empresarial BanCoppel.',
    },
    {
      title: '¿Qué es un crédito PyME?',
      content:
        'Es un crédito simple, en donde en caso de ser aprobado, se depositará el monto del crédito en una sola exhibición. Teniendo mensualidades fijas a lo largo del plazo elegido.',
    },
    {
      title: '¿Necesito contar con una Garantía?',
      content:
        'No requieres asignar una garantía hipotecaria o de algún otro tipo, únicamente deberás asignar un Obligado Solidario.',
    },
    {
      title: '¿Necesito contar con una cuenta bancaria?',
      content:
        'Si eres Persona Fisica con Actividad Empresarial es necesario contar con una cuenta bancaria en BanCoppel, por lo que te recomendamos visitar tu sucursal más cercana. ' +
        ' Si eres Persona Moral no es necesario contar con una cuenta bancaria, por que durante el flujo se te aperturará una cuenta empresarial con BanCoppel.',
    },
    {
      title: '¿Qué pasa si me asignan un monto menor al que solicité?',
      content:
        'El monto autorizado depende de la capacidad de flujo y nivel de endeudamiento que identifique el motor paramétrico de la plataforma.',
    },
    {
      title: '¿Qué pasa si mi Obligado Solidario no puede responder las preguntas en el momento?',
      content:
        'Si bien es muy importante que tu obligado solidario responda las preguntas cuanto antes. Cabe recordar que mientras más tiempo se tarde, mayor va a ser la tardanza al momento de otorgarte tu crédito.',
    },
    {
      title: '¿Por qué no aceptan solicitud de Personas Físicas?',
      content:
        'No es posible otorgar créditos a personas físicas ya que esta es una plataforma para otorgar créditos únicamente a Personas físicas con actividad empresarial así como Personas morales. En caso de necesitar un crédito o préstamo personal, te invitamos a visitar nuestra página de inicio de BanCoppel personas.',
    },
    {
      title: '¿Qué puedo hacer si me rechazan mi solicitud?',
      content: 'Ponte en contacto con uno de nuestros asesores en la sección de ayuda.',
    },
    {
      title: '¿En cuánto tiempo recibo mi dinero?',
      content:
        'Una vez que firmado tu contrato, no debería pasar más de 72 horas hábiles para que veas el depósito reflejado en tu cuenta empresarial BanCoppel.',
    },
    {
      title: '¿Cómo puedo subir un documento corregido?',
      content:
        'Al momento de solicitarte alguna corrección, nos comunicaremos contigo a través de correo electrónico indicándote los pasos a seguir. ',
    },
    {
      title: '¿Cuánto es lo máximo que puedo solicitar?',
      content: 'Puedes solicitar desde $300,000 pesos hasta $12 millones de pesos',
    },
    {
      title: '¿Cómo comienzo?',
      content:
        'Para comenzar tu proceso de solicitud será necesario que realices la simulación de tu crédito llenando los campos que aparecen en la pantalla de simulación y posteriormente dar click al botón de solicitar mi crédito.',
    },
  ];

  const userAccount = [
    {
      title: '¿Es obligatorio el registro en la plataforma?',
      content:
        'Para poder llevar a cabo tu evaluación como solicitante es necesario durante el proceso la creación de tu usuario y contraseña.',
    },
    {
      title: '¿Cómo puedo recuperar mi contraseña?',
      content: 'Al dar click en el botón de iniciar sesión aparecerá una opción de recuperación de contraseña.',
    },
    {
      title: '¿En donde puedo cambiar mi correo electrónico?',
      content:
        'Solo tienes que acceder a tu perfil haciendo clic en tu imagen de usuario. Ya dentro, podrás visualizar el campo de tu correo electrónico, mismo que podrás editar.',
    },
    {
      title: '¿Cómo puedo cambiar mi contraseña?',
      content:
        'Solo tienes que acceder a tu perfil haciendo clic en tu imagen de usuario. Ya dentro, podrás visualizar las opciones para modificar tu contraseña.',
    },
    {
      title: '¿Dónde puedo visualizar los documentos que ya he subido?',
      content:
        'Podrás visualizar el estatus de tus documentos en tu portal privado de cliente una vez iniciada tu sesión.',
    },
  ];

  const dataSecurity = [
    {
      title: '¿Cómo BanCoppel protege mis datos personales?',
      content:
        'BanCoppel, se rige por las normas impuestas por la CMBV las cuales son muy estrictas y a través de nuestro aviso de privacidad el cual puedes consultar aquí (enlace al PDF)',
    },
    {
      title: '¿Qué pasa si alguien accede a mi cuenta sin mi consentimiento?',
      content:
        'Si crees que alquien a accedido a tu cuenta, te recomendamos cambies urgentemente tu contraseña. En caso de que tengas tu acceso bloqueado, puedes comunicarte con nosotros enviándonos tus comentarios en el campo de centro de ayuda ubicado en la sección de ayuda de la página de inicio del portal PyME.',
    },
    {
      title: '¿Cómo BanCoppel protege mi cuenta de crédito?',
      content:
        'En nuestra plataforma utilizamos todos los certificados de seguridad requeridos por la CNBV, y cifrado de 128 bits vía https.',
    },
  ];

  const [array, setArray] = useState(aboutPymeItems);

  const acc = (
    <div className={styles['container-accordion']}>
      {array.map(({ title, content }) => (
        <Accordion key={title} color="blue" icon="cross" title={title} expanded={false}>
          <div>
            <p>{content}</p>
          </div>
        </Accordion>
      ))}
    </div>
  );

  const handleOption = (opt) => {
    setArray(opt);
    setOption(opt);
  };

  const [disabled, setDisabled] = useState(false);

  const checkedButton = () => {
    if (checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    setDisabled(false);
  };

  useEffect(() => {
    if (
      formulario.values.name === '' ||
      formulario.values.email === '' ||
      formulario.values.phone === '' ||
      formulario.values.tellUs === '' ||
      checked === false
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  return (
    <>
      <form noValidate="novalidate">
        <SimpleBanner>
          <div className="container">
            <div className="row justify-content-center mx-0">
              <h1 className={`col-xs-12 text-xs-center ${styles.title}`}>CENTRO DE AYUDA</h1>
              <h4 className={`col-xs-12 col-md-8 text-xs-center px-xs-0 ${styles.bt1}`}>
                Queremos que tomes la mejor decisión con toda la información a tu alcance. Si tienes dudas contáctanos.
              </h4>
            </div>
            <div className="row justify-content-center mt-5 mx-0 ">
              <div className="col-sm-12 col-md-6 mb-5">
                <TextField
                  name="name"
                  formulario={formulario}
                  size="small"
                  capitalize
                  label="Nombre"
                  type="text"
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
                  inverted
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-5">
                <TextField
                  name="phone"
                  formulario={formulario}
                  size="small"
                  label="Número de teléfono"
                  type="number"
                  inverted
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-5">
                <Select name="state" label="Estado" formulario={formulario} size="small" items={items} inverted />
              </div>
            </div>
            <div className="row justify-content-center mx-0">
              <div className={`col-12 ${styles['textarea-questions']}`}>
                <TextArea name="tellUs" formulario={formulario} label="Cuéntanos tus dudas..." maxLength="300" />
              </div>
            </div>
          </div>
        </SimpleBanner>
        <div className="row justify-content-center mt-5 mx-xs-0 mx-sm-0">
          <div className={` ${styles.captcha}`}>
            <input name="check" type="checkbox" onClick={checkedButton} />
            <label htmlFor="my-check" className="mr-5">
              {' '}
              &nbsp; No soy un robot
            </label>
            <img className="ml-5" src="/captcha.svg" alt="Document" />
          </div>
        </div>
        <div className="row justify-content-center pt-3 mx-0">
          <div className="col-auto">
            <button
              disabled={!(formulario.isValid && formulario.dirty) || disabled}
              type="button"
              className="btn-small col-12"
            >
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
                      Un ejecutivo responderá todas tus dudas.
                      <div className="sub text-secondary text-decoration-underline">5526774690</div>
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
        <div className="container">
          {/* <div className={`row py-5 ${styles['border-contact']}`}> */}
          {/* <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-row align-items-center">
                <div className="col-8">
                  <div className="sub text-primary mb-3">Chat</div>
                  <div className="body2 mb-3">Si prefieres, manda tus dudas por nuestro chat.</div>
                  <Link href="requisitos">
                    <button className="btn-link text-primary" type="button">
                      Ver todos los requisitos
                    </button>
                  </Link>
                </div>
                <div className="col-4">
                  <img src="/chat.svg" alt="" />
                </div>
              </div>
            </div> */}
        </div>
        {/* </div> */}

        <Title linea1="Todo sobre" linea2="crédito pyme" />

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div
                name="acerca-del-credito"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 1 ? styles.active : ''}`}
                onClick={() => handleOption(aboutPymeItems)}
                role="button"
                tabIndex={0}
              >
                <img src="/about-info.svg" alt="Document" />
                <div>
                  <div className="sub ">Acerca del crédito</div>
                  <div className="body2">Todo sobre el crédito Pyme</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 1 && acc}</div>
              <div
                name="cuenta-usuario"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 2 ? styles.active : ''}`}
                onClick={() => handleOption(userAccount)}
                role="button"
                tabIndex={0}
              >
                <img src="/user.svg" alt="User" />
                <div>
                  <div className="sub">Cuenta de usuario</div>
                  <div className="body2">Tu sesión y administración</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 2 && acc}</div>
              <div
                name="seguridad-datos"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 3 ? styles.active : ''}`}
                onClick={() => handleOption(dataSecurity)}
                role="button"
                tabIndex={0}
              >
                <img src="/security.svg" alt="Security" />
                <div>
                  <div className="sub ">Seguridad de datos</div>
                  <div className="body2">Protegemos tu información</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 3 && acc}</div>
            </div>
            <div className="col-lg-7 col-md-7 d-lg-block d-md-block d-sm-none d-none">{acc}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ayuda;
