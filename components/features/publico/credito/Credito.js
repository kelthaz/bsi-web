import Link from 'next/link';
import PropTypes from 'prop-types';
import BannerCreditoPyme from '../../../core/banners/BannerCreditoPyme';
import Accordion from '../../../shared/accordion/Accordion';
import TitleSection from '../../../shared/titles/title-section/TitleSection';
import SvgCargaTusDocumentos from '../../../svgs/credito-pyme/SvgCargaTusDocumentos';
import SvgConoceTuOferta from '../../../svgs/credito-pyme/SvgConoceTuOferta';
import SvgDatosEmpresa from '../../../svgs/credito-pyme/SvgDatosEmpresa';
import SvgDatosPersonales from '../../../svgs/credito-pyme/SvgDatosPersonales';
import SvgCalendario from '../../../svgs/icons-cards/SvgCalendario';
import SvgCargarDocumentos from '../../../svgs/icons-cards/SvgCargarDocumentos';
import SvgTarjetaCredito from '../../../svgs/icons-cards/SvgTarjetaCredito';
import SvgPrimeraTextura from '../../../svgs/texturas/SvgPrimeraTextura';
import SvgSextaTextura from '../../../svgs/texturas/SvgSextaTextura';
import styles from './credito-pyme.module.scss';

const Credito = ({ accordionItems }) => (
  <>
    <BannerCreditoPyme />
    <section className="section-blue-storm-relative">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className="row p-lg-5 p-md-0 p-sm-2 p-xs-2 no-gutters">
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div className={styles['title-line-left']}>
              <h2>
                <span>
                  CONOCE A
                  <br />
                  DETALLE
                  <br />
                </span>

                <span>
                  EL CRÉDITO
                  <br />
                  DIGITAL PYMES
                </span>
              </h2>
              <p>Todo sobre los requisitos, plazos y garantías de un Crédito Digital Pymes.</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
            <div className="card-accordion">
              {accordionItems.map(({ titulo, contenido }) => (
                <Accordion key={titulo} color="blue" icon="cross" title={titulo} expanded={false}>
                  <p>{contenido}</p>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="svg-textura-left-bottom">
        <SvgPrimeraTextura />
      </div>
    </section>
    <section className="section-white">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <h2 id="paso a paso" className="color-blue-storm text-center p-lg-5 p-md-4 p-sm-2 p-xs-2">
          PASO A PASO
        </h2>
        <div className="row p-lg-5 p-md-0 p-sm-2 p-xs-2 no-gutters">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TitleSection orden="01" linea1="Datos" linea2="personales" />
            <div className="card-simple-blue-light">
              <p>
                En este primer paso necesitamos conocerte, es por eso que te solicitaremos información básica como tu
                nombre y datos de contacto. Es necesario contar con el RFC con el que facturas.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="svg-section">
              <SvgDatosPersonales />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-blue-storm-relative">
      <div className="svg-textura-right-top">
        <SvgSextaTextura />
      </div>
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className="row p-lg-5 p-md-0 p-sm-2 p-xs-2 no-gutters">
          <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="svg-section">
              <SvgDatosEmpresa />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TitleSection orden="02" linea1="Datos de" linea2="tu empresa" inverted />
            <div className="card-simple-white">
              <p>
                Para continuar, necesitamos conocer mejor tu negocio, platicaremos un poco de dónde está ubicado,
                cuántos empleados tienes, etc.
              </p>
              <p>
                Te solicitaremos tu e.firma y tu CIEC (dependiendo qué tipo de persona seas) y designarás a tu Obligado
                Solidario.
              </p>
              <p>Conoce todos los requisitos por tipo de persona.</p>
              <Link href="requisitos">
                <button type="button" className="btn-link-arrow-right">
                  Ver todos los requisitos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-white">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className="row p-lg-5 p-md-0 p-sm-2 p-xs-2 no-gutters">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TitleSection orden="03" linea1="conoce" linea2="tu oferta" />
            <div className="card-simple-blue-light">
              <p>¡Llegó la hora de conocer cuanto te podremos otorgar!</p>
              <p>Además podrás vincular tu cuenta bancaria BanCoppel si ya cuentas con una.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="svg-section">
              <SvgConoceTuOferta />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-blue-storm">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className="row p-lg-5 p-md-0 p-sm-2 p-xs-2 no-gutters">
          <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="svg-section">
              <SvgCargaTusDocumentos />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TitleSection orden="04" linea1="carga tus" linea2="documentos" inverted />
            <div className="card-simple-white">
              <p>
                Finalmente, te solicitaremos algunos documentos dependiendo el tipo de persona que seas para completar
                tu solicitud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-white">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className={`row p-lg-5 p-md-0 p-sm-2 p-xs-2 ${styles['container-title']}`}>
          <h2>¿Y DESPUÉS?</h2>
          <p>
            Cuando termines tu solicitud, nuestro equipo revisará tus documentos y nos pondremos en contacto contigo
            para que recibas a un ejecutivo en tu negocio, firmes tu contrato y finalmente depositarte tu dinero.
          </p>
        </div>
        <div className="row px-lg-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
            <div className="card-blue-night text-md-center">
              <div className="container-svg-card">
                <SvgCargarDocumentos />
              </div>
              <div>
                <h4 className="color-white m-0">Revisión</h4>
                <p className="color-white body2 m-0">de documentos</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
            <div className="card-blue-night text-md-center">
              <div className="container-svg-card">
                <SvgCalendario />
              </div>
              <div>
                <h4 className="color-white m-0">Agendar cita</h4>
                <p className="color-white body2 m-0">para firmar contrato</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
            <div className="card-blue-night text-md-center">
              <div className="container-svg-card">
                <SvgTarjetaCredito />
              </div>
              <div>
                <h4 className="color-white m-0">Depositar el dinero</h4>
                <p className="color-white body2 m-0">en tu cuenta BanCoppel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-blue-light">
      <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
        <div className={`row p-lg-5 p-md-0 p-sm-2 p-xs-2 ${styles['container-final-section']}`}>
          <h2>
            <span>DA EL SIGUIENTE</span>
            <br />
            <span>GRAN SALTO</span>
          </h2>
          <Link href="simulador">
            <button type="button" className="btn-link-arrow-right">
              Solicita tu crédito
            </button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

Credito.propTypes = {
  accordionItems: PropTypes.any.isRequired,
};

export default Credito;
