import Head from 'next/head';
import { Header } from '../../components/header/Header';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import { Footer } from '../../components/footer/Footer';
import { Title } from '../../components/title/Title';
import styles from './aviso-privacidad.module.scss';

const Ayuda = () => {
  const fechaPublicacion = '20 de diciembre de 2019';
  const fechaEntradaVigor = '1 de enero de 2020';
  const terminos = (
    <>
      <div className={`sub ${styles['terms-title']}`}>BANCOPPEL, S.A., INSTITUCIÓN DE BANCA MÚLTIPLE</div>
      <div>
        <p>
          1. EL RESPONSABLE DEL TRATAMIENTO DE LOS DATOS PERSONALES. BANCOPPEL, S.A., INSTITUCIÓN DE BANCA MÚLTIPLE (en
          lo sucesivo Responsable).
        </p>
        <p>
          2. DOMICILIO DEL RESPONSABLE. Avenida Insurgentes Sur No. 553, Sexto Piso, Colonia Escandón, Delegación Miguel
          Hidalgo, México, Distrito Federal, C.P. 11800.
        </p>
        <p>
          3. DATOS PERSONALES. El Responsable informa a los Titulares que los Datos Personales que recaba de estos
          últimos son:
        </p>
        <p>
          a. Datos de identificación: nombre completo, fotografía, dirección, teléfonos, estado civil, régimen conyugal,
          huellas dactilares, sexo, correo electrónico, Registro Federal de Contribuyentes (R.F.C.), nacionalidad y
          fecha de nacimiento.
        </p>
        <p>
          b. Datos financieros o patrimoniales: depósitos a la vista e inversiones, bienes muebles e inmuebles,
          historial crediticio, avales otorgados, así como datos que permitan estimar su solvencia económica y capacidad
          de pago.
        </p>
        <p>
          c. Datos Laborales: años de experiencia, puesto, actividad o giro de negocio. Para efectos del presente Aviso
          de Privacidad a los Datos de Identificación, Financieros, Patrimoniales y a los Datos Laborales, se les
          denominará en su conjunto como Datos Personales.
        </p>
        <p>
          Para aquellos Titulares que se encuentren casados bajo el régimen de sociedad conyugal, el Responsable
          requiere de los cónyuges de los Titulares, los siguientes Datos Personales: nombre, ocupación, nacionalidad y
          fecha de nacimiento, datos de los que el cónyuge es igualmente Titular en términos del presente Aviso de
          Privacidad.
        </p>
        <p>
          Los Titulares que proporcionen Datos Personales de sus cónyuges deberán notificar a éstos haber proporcionado
          dichos datos al Responsable además del contenido del presente Aviso de Privacidad, lo anterior, con
          independencia de la notificación que el Responsable hará a dichos Titulares del Aviso de Privacidad al primer
          contacto que tenga con éstos últimos.
        </p>
        <p>Los Datos Personales de los Titulares se podrán recabar personal, directa o indirectamente.</p>
        <p>
          Es responsabilidad de los Titulares de los Datos Personales garantizar que los datos que facilite personal o
          directamente sean veraces y completos, así como de notificar sobre cualquier modificación para dar
          cumplimiento a la obligación de mantener la información actualizada
        </p>
        <p>
          4. FINALIDAD DEL TRATAMIENTO. El Responsable utilizará los Datos Personales de los Titulares para los
          siguientes fines:...
        </p>
      </div>
    </>
  );

  return (
    <>
      <SimpleBanner>
        <div className="row justify-content-center">
          <div className={`col-auto my-auto text-center ${styles['banner-title']}`}>
            <h1 className={styles['banner-title-1']}>Aviso</h1>
            <h1 className={styles['banner-title-2']}>de privacidad</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className={`col-auto text-center body1 ${styles['aviso-privacidad-fechas']}`}>
            <div>
              Fecha de publicación: <span>{fechaPublicacion}</span>
            </div>
            <div>
              Fecha de entrada en vigor: <span>{fechaEntradaVigor}</span>
            </div>
          </div>
        </div>
      </SimpleBanner>

      <div className={`row justify-content-center mx-0 ${styles.box}`}>
        <div className={`col-auto ${styles['terms-box']}`}>{terminos}</div>
      </div>
    </>
  );
};

export default Ayuda;
