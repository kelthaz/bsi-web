import Image from 'next/image';
import styles from './footer.module.scss';
import Accordion from '../../../../shared/accordion/Accordion';
import SvgLogoBanCoppelInverted from '../../../../svgs/logos/SvgLogoBanCoppelInverted';
import SvgLogoYoutube from '../../../../svgs/logos/SvgLogoYoutube';
import SvgLogoFacebook from '../../../../svgs/logos/SvgLogoFacebook';
import SvgLogoLinkedLink from '../../../../svgs/logos/SvgLogoLinkedLink';

const Footer = () => {
  const datos = [
    { about: '¿Quiénes somos?', link: 'https://www.bancoppel.com/acerca_bancoppel/quienes_somos.html' },
    { about: 'Preguntas frecuentes', link: 'https://www.bancoppel.com/acerca_bancoppel/faq.html' },
    { about: 'Información corporativa', link: 'https://www.bancoppel.com/acerca_bancoppel/info_corp.html' },
    { about: 'Plan de apoyo para cuidar tu crédito', link: 'https://www.bancoppel.com/plandeapoyo/index.html' },
    { about: 'Unidad especializada Bancoppel Condusef', link: 'https://www.bancoppel.com/modal_bcopp/condusef.htm' },
    { about: 'Productos protegidos por el IPAB', link: 'https://www.bancoppel.com/acerca_bancoppel/ipab.html' },
    { about: 'Aviso de privacidad', link: 'https://www.bancoppel.com/acerca_bancoppel/aviso.html' },
    { about: 'Robo de identidad', link: 'https://www.bancoppel.com/pdf/aviso_robo_de_identidad.pdf' },
    { about: 'Tarifas y comisiones', link: 'https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5' },
    { about: 'Corresponsales', link: 'https://www.bancoppel.com/corresponsales/index.html' },
    { about: 'Despachos de cobranza', link: 'https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a41f' },
    { about: 'Tips de seguridad', link: 'https://www.bancoppel.com/acerca_bancoppel/tips.html' },
  ];

  const renderLinks = (data) => (
    <li key={data.about}>
      <a target="_blank" rel="noreferrer" href={data.link}>
        {data.about}
      </a>
    </li>
  );

  return (
    <footer className={styles.footer}>
      <div className={`${styles['footer-container']} container`}>
        <SvgLogoBanCoppelInverted />

        <div className={styles['second-content']}>
          <div>
            <h5>Acerca de BanCoppel</h5>
            <div>
              <ul>{datos.slice(0, 6).map(renderLinks)}</ul>

              <ul>
                {datos.slice(6, 12).map(({ about, link }) => (
                  <li key={about}>
                    <a target="_blank" rel="noreferrer" href={link}>
                      {about}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h5>Contacto</h5>
            <span>Lada sin costo: 800 1 2267735</span>
            <span>EU. y Canadá: 866 2543790</span>
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BanCoppel/">
                <SvgLogoFacebook />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bancoppel/">
                <SvgLogoLinkedLink />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg">
                <SvgLogoYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles['second-content-accordeon']}>
          <Accordion title="Acerca de BanCoppel" expanded={false} color="white" icon="arrow">
            <div className={styles['accordeon-ul']}>
              <ul>{datos.map(renderLinks)}</ul>
            </div>
          </Accordion>
          <Accordion title="Contacto" expanded={false} color="white" icon="arrow">
            <div className={styles['accordeon-contact']}>
              <span>Lada sin costo: 800 1 2267735</span>
              <span>EU. y Canadá: 866 2543790</span>
              <div>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BanCoppel/">
                  <SvgLogoFacebook />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bancoppel/">
                  <SvgLogoLinkedLink />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg">
                  <SvgLogoYoutube />
                </a>
              </div>
            </div>
          </Accordion>
        </div>

        <div className={styles['third-content']}>
          <div className="m-xs-2 m-sm-0">
            <Image src="/ipab.svg" alt="" width="80" height="50" />
          </div>
          <div className="m-xs-2 m-sm-0">
            <Image src="/bancoppel-vida.svg" alt="" width="130" height="40" />
          </div>
          <div className="m-xs-2 m-sm-0">
            <Image src="/afore.svg" alt="" width="210" height="26" />
          </div>
          <div className="m-xs-2 m-sm-0">
            <Image src="/fintech.svg" alt="" width="50" height="44" />
          </div>
          <div className="m-xs-2 m-sm-0">
            <Image src="/buro.svg" alt="" width="50" height="50" />
          </div>
          <div className="m-xs-2 m-sm-0">
            <Image src="/check-confianza.svg" alt="" width="77" height="34" />
          </div>
        </div>

        <span>Copyright © 2021 BanCoppel S.A. Institución de Banca Múltiple - Todos los derechos reservados</span>

        <div className={styles['four-content']}>
          <span>
            <a target="_blank" rel="noreferrer" href="https://www.bancoppel.com/acerca_bancoppel/terminos.html">
              Términos y Condiciones de Uso
            </a>
            <span> | </span>
            <a target="_blank" rel="noreferrer" href="https://www.bancoppel.com/acerca_bancoppel/aviso.html">
              Aviso de Privacidad
            </a>
            <span> | </span>
            <a target="_blank" rel="noreferrer" href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5">
              Consulta los costos y las comisiones de nuestros productos.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
