import Link from 'next/link';
import BannerCreditoPyme from '../../components/core/banners/BannerCreditoPyme';
import Accordion from '../../components/shared/accordion/Accordion';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import styles from './credito-pyme.module.scss';

const CreditoPyme = () => {
  const accordionItems = [
    {
      title: 'Requisitos',
      content: 'Tener más de 2 años operando y facturar más de $2 MDP al año.',
    },
    {
      title: 'Línea',
      content: 'Puedes obtener hasta $12 MDP.',
    },
    {
      title: 'Plazos',
      content: 'Tus plazos podrán ser de 6 hasta 36 meses.',
    },
    {
      title: 'Tasas',
      content: 'Conoce más detalles sobre nuestras tasas <a href="#">aquí</a>.',
    },
    {
      title: 'CAT',
      content:
        'PROMEDIO 29.1% Sin IVA, sobre un crédito de $746,619.84 de pesos, tasa de interés promedio anual de 20.00% con comisión por apertura del 1% sin IVA sobre el monto de la línea de crédito autorizada. Fecha de cálculo 30 de junio de 2019. Sólo para fines informativos y de comparación. Información sujeta a cambios en función de las condiciones aplicables al momento de contratar. Vigente al 31 de diciembre de 2019.',
    },
    {
      title: 'Garantías',
      content: 'Se requiere obligación solidaria',
    },
    {
      title: 'Disposición',
      content: 'Se realizará una sola disposición al inicio y se paga mediante amortizaciones mensuales programadas',
    },
    {
      title: 'Pagos capital e intereses',
      content:
        'Se cobra cada mes directamente a la cuenta bancaria BanCoppel del cliente el día de corte del crédito. También se permite pago anticipado.',
    },
    {
      title: 'Redisposición',
      content: 'Al liquidar el primer crédito podrá redisponer de uno nuevo si lo desea.',
    },
  ];

  return (
    <>
      <BannerCreditoPyme />
      <article>
        <section className="section-blue-storm">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TitleSection inverted orden="01" linea1="Datos" linea2="personales" />
                <div className="card-simple-white">
                  <p>
                    El primer bloque de Datos Personales es para conocerte, por lo que te solicitaremos información
                    básica como tu nombre y tus datos de contacto.
                  </p>
                  <p>Para este bloque de la solicitud será indispensable contar con tu RFC con el que facturas.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
                <div className={styles['container-svg']}>
                  <img className="p-lg-5 p-md-4 p-sm-2 p-xs-2" src="/pantalla-circulo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
                <div className={styles['container-svg']}>
                  <img className="p-lg-5 p-md-4 p-sm-2 p-xs-2" src="/edificio-circulo.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TitleSection orden="02" linea1="Datos de" linea2="tu empresa" />
                <div className="card-simple-blue-light">
                  <p>
                    El segundo bloque de Datos de tu Empresa es para conocer mejor tu negocio, aquí platicaremos un poco
                    de dónde está ubicado, cuántos empleados tienes, etc.
                  </p>
                  <p>
                    Aquí te solicitaremos tu e-firma y tu CIEC (dependiendo qué tipo de persona seas) y designarás a tu
                    Obligado Solidario.
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
        <section className="section-blue-night">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TitleSection inverted orden="03" linea1="conoce" linea2="tu oferta" />
                <div className="card-simple-white">
                  <p>¡Llegó la hora de conocer cuanto te podremos otorgar!</p>
                  <p>Además podrás vincular tu cuenta bancaria BanCoppel si ya cuentas con una.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
                <div className={styles['container-svg']}>
                  <img className="p-lg-5 p-md-4 p-sm-2 p-xs-2" src="/buscar-circulo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-xs-none">
                <div className={styles['container-svg']}>
                  <img className="p-lg-5 p-md-4 p-sm-2 p-xs-2" src="/documentos-circulo.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TitleSection orden="04" linea1="carga tus" linea2="documentos" />
                <div className="card-simple-blue-light">
                  <p>
                    Finalmente, te solicitaremos algunos documentos dependiendo el tipo de persona que seas para
                    completar tu solicitud.
                  </p>
                  {/* <p>
                    Por ejemplo, si eres Persona Física con Actividad Empresarial, te realizaremos una toma de
                    biométricos, y si eres Persona Moral te solicitaremos documentos corporativos como tu Acta
                    Constituiva.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blue-storm-grad">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className={`row p-lg-5 p-md-4 p-sm-2 p-xs-2 ${styles['container-title']}`}>
              <h2>¿Y DESPUÉS?</h2>
              <p>
                Cuando termines tu solicitud, nuestro equipo revisará tus documentos y nos pondremos en contacto contigo
                para que recibas a un ejecutivo en tu negocio, firmes tu contrato y finalmente ¡depositarte tu dinero!
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
                <div className="card-simple-white-img">
                  <img alt="" src="/ready-sheet.svg" />
                  <div>
                    <h4>Revisión</h4>
                    <p>de documentos</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
                <div className="card-simple-white-img">
                  <img alt="" src="/schedule.svg" />
                  <div>
                    <h4>Agendar cita</h4>
                    <p>para firmar contrato</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2">
                <div className="card-simple-white-img">
                  <img alt="" src="/money.svg" />
                  <div>
                    <h4>Depositar tu dinero</h4>
                    <p>en cuenta BanCoppel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <div className={styles['title-line-left']}>
                  <h2>
                    <span>CARACTERÍSTICAS</span>
                    <br />
                    <span>
                      DE NUESTRO
                      <br />
                      CRÉDITO
                    </span>
                  </h2>
                  <p>Conoce más sobre los requisitos, plazos y garantías de un crédito pyme.</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                <div className="card-accordion">
                  {accordionItems.map(({ title, content }) => (
                    <Accordion key={title} color="blue" icon="cross" title={title} expanded={false}>
                      <div>
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                      </div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blue-light">
          <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
            <div className={`row p-lg-5 p-md-4 p-sm-2 p-xs-2 ${styles['container-final-section']}`}>
              <h2>
                <span>DA EL SIGUIENTE</span>
                <br />
                <span>GRAN SALTO</span>
              </h2>
              <Link href="simulador">
                <button type="button" className="btn-link-arrow-right">
                  Solicitar mi crédito
                </button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default CreditoPyme;
