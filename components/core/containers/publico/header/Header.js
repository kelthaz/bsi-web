/* eslint-disable complexity */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import SearchBox from '../search-box/SearchBox';

const Header = () => {
  const { pathname } = useRouter();
  const pages = [
    { label: 'Inicio', link: 'inicio' },
    { label: 'Crédito Digital Pymes', link: 'credito-pyme' },
    { label: 'Requisitos', link: 'requisitos' },
    { label: 'Simulador', link: 'simulador' },
    { label: 'Beneficios', link: 'beneficios' },
    { label: 'Ayuda', link: 'ayuda' },
  ];

  const menuOptions = [
    {
      label: 'Crédito',
      subMenu: [
        {
          value: 'Tarjeta de Crédito en línea',
          link: 'https://www.bancoppel.com/credito_bcopp/tdc.html',
        },
        {
          value: 'Tarjeta de Crédito BanCoppel',
          link: 'https://www.bancoppel.com/credito_bcopp/tdco.html',
        },
        {
          value: 'Tarjeta de Crédito BanCoppel Platinum',
          link: 'https://www.bancoppel.com/credito_bcopp/tdcp.html',
        },
        {
          value: 'Tarjeta de Crédito BanCoppel Grupo Coppel',
          link: 'https://www.bancoppel.com/credito_bcopp/tdcg.html',
        },
        {
          value: 'Préstamo Personal BanCoppel',
          link: 'https://www.bancoppel.com/credito_bcopp/prestamo.html',
        },
        {
          value: 'Préstamo Digital BanCoppel',
          link: 'https://www.bancoppel.com/credito_bcopp/prestamo-digital.html',
        },
      ],
    },
    {
      label: 'Ahorro',
      subMenu: [
        {
          value: 'Cuenta Efectiva Digital',
          link: 'https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html',
        },
        {
          value: 'Cuenta Efectiva Jóvenes',
          link: 'https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva_jovenes.html',
        },
        {
          value: 'Cuenta Efectiva Cheques',
          link: 'https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva_cheques.html',
        },
        {
          value: 'Sorteo Efectivo BanCoppel',
          link: 'https://www.bancoppel.com/sorteo_bcopp/index.html',
        },
        // {
        //   value: 'Cuenta Móvil - Transfer',
        //   link: '/modal_bcopp/cuenta-movil.html',
        // },
      ],
    },
    {
      label: 'Inversión',
      subMenu: [
        {
          value: 'Inversión Creciente',
          link: 'https://www.bancoppel.com/inversion_bcopp/inversion.html',
        },
        {
          value: 'Pagaré',
          link: 'https://www.bancoppel.com/inversion_bcopp/pagare.html',
        },
      ],
    },
    {
      label: 'Envíos de dinero',
      subMenu: [
        {
          value: 'Depósito a Cuenta',
          link: 'https://www.bancoppel.com/remesas/abono-cuenta.html',
        },
        {
          value: 'Cobro en Ventanilla',
          link: 'https://www.bancoppel.com/remesas/efectivo.html',
        },
      ],
    },
    {
      label: 'Banca en línea',
      subMenu: [
        {
          value: 'Banca por Internet',
          link: 'https://www.bancoppel.com/banca_personal_bcopp/main.html',
        },
        {
          value: 'BanCoppel Express',
          link: 'https://www.bancoppel.com/banca_personal_bcopp/express.html',
        },
      ],
    },
    {
      label: 'Nómina activa',
      subMenu: [
        {
          value: 'Conoce Nómina Activa',
          link: 'https://www.bancoppel.com/nomina_personas/nomina_activa.html',
        },
      ],
    },
  ];

  const menuOptions2 = [
    {
      label: 'Cuenta Eje',
      link: 'https://www.bancoppel.com/cuenta_eje/empresarial.html',
    },
    { label: 'EmpresaNet', link: 'https://www.bancoppel.com/empresanet_bcopp/empresanet.html' },
    { label: 'Nómina BanCoppel', link: 'https://www.bancoppel.com/nomina_empresas/nomina.html' },
    { label: 'BanCoppel Pymes', link: '#' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenus, setSubMenus] = useState([]);
  const [nameLabel, setNameLabel] = useState('Crédito');
  const [menuSelectPeople, setMenuSelectPeople] = useState({ category: 'Empresas', option: 'BanCoppel Pymes' });
  const [menuSelect, setMenuSelect] = useState({ category: 'Empresas', option: 'BanCoppel Pymes' });
  const [pageSelect, setPageSelect] = useState();
  const [toggleSearchBox, setToggleSearchBox] = useState();

  useEffect(() => {
    setPageSelect(pathname.slice(1));
  }, [pathname]);

  const { category } = menuSelect;

  const handleCategory = ({ target }) => {
    setMenuSelect({ ...menuSelect, category: target.innerHTML });
  };

  const handleCategoryCompanies = ({ target }) => {
    setMenuSelect({ ...menuSelect, category: target.innerHTML });
    setMenuSelectPeople({ ...menuSelectPeople, category2: target.innerHTML });
  };

  const setSubMenusPeople = (subMenu, label) => {
    setSubMenus(subMenu);
    setNameLabel(label);
    setMenuOpen(!menuOpen);

    return subMenu;
  };

  const setMenusPeople = (subMenu, label) => {
    setNameLabel(label);
    setSubMenus(subMenu);

    return subMenu;
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenusPeople(menuOptions[0].subMenu, 'Crédito');
  };

  const handlePage = (target) => {
    setPageSelect(target);
    setMenuOpen(false);
  };

  const handletToggleSearchBox = () => {
    setToggleSearchBox(!toggleSearchBox);
    setMenuOpen(false);
  };

  const routerIncludes = (pathname1, pathname2) => pathname.includes(pathname1) || pathname.includes(pathname2);

  return (
    !routerIncludes('login', 'portal-privado') && (
      <header className={styles['relative-header']}>
        <div className={`${styles['header-top']} ${menuOpen ? styles['menu-active'] : styles['menu-inactive']}`}>
          <div>
            {!routerIncludes('solicitud', 'obligado-solidario') && (
              <button type="button" onClick={handleMenu}>
                {}
              </button>
            )}
            <img src={menuOpen ? '/bancoppel-pymes-blanco.svg' : '/bancoppel-pymes.svg'} className="logo" alt="" />
          </div>
          <div>
            <img src={menuOpen ? '/search.svg' : '/search-blue.svg'} alt="" onClick={handletToggleSearchBox} />

            {!routerIncludes('solicitud', 'obligado-solidario') && (
              <Link href="/login/[option]" as="/login/iniciar-sesion">
                <button type="button" className={menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}>
                  Inicia sesión
                </button>
              </Link>
            )}
            {!routerIncludes('solicitud', 'obligado-solidario') && (
              <Link href="simulador">
                <button type="button" className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}>
                  Solicita tu crédito
                </button>
              </Link>
            )}
            {!routerIncludes('solicitud', 'obligado-solidario') && <button type="button">{}</button>}
          </div>
        </div>
        {toggleSearchBox ? <SearchBox unmount={handletToggleSearchBox} /> : null}
        {!menuOpen && !routerIncludes('solicitud', 'obligado-solidario') && (
          <nav className={styles['header-bottom']}>
            <ul>
              {pages.map(({ label, link }) => (
                <li key={label} className={pageSelect === link ? styles['page-selected'] : ''}>
                  <Link href={link}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {menuOpen && (
          <>
            <div className={styles.menu}>
              <ul className={`${styles['ul-padding']}`}>
                <li className={category === 'Personas' ? styles['category-selected'] : styles['li-padding']}>
                  <h4 onClick={handleCategory}>Personas</h4>
                </li>
                <li className={category === 'Empresas' ? styles['category-selected'] : styles['li-padding']}>
                  <h4 onClick={handleCategoryCompanies}>Empresas</h4>
                </li>
              </ul>
            </div>
            <div className={`${styles['items-menu']} ${styles['menu-active']}`}>
              {category === 'Empresas' ? (
                <ul className={`${styles['ul-border']}`}>
                  {menuOptions2.map(({ label, link }) => (
                    <li key={link} className={label === 'BanCoppel Pymes' ? styles['option-selected'] : ''}>
                      <a
                        className="col-3"
                        target="_blank"
                        rel="noreferrer"
                        href={link}
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={`${styles['list-items']}`}>
                  {menuOptions.map(({ label, link, subMenu }) => (
                    <li key={link}>
                      <div>
                        <div className={label === nameLabel ? styles['option-selected'] : ''}>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={link}
                            onClick={() => setMenusPeople(subMenu, label)}
                          >
                            {label}
                          </a>
                        </div>

                        <div className={`${styles['margen-list']}`}>
                          {label === nameLabel
                            ? subMenus.map((options) => (
                                <li>
                                  <a
                                    className={` ${styles['sub-menu-hover']}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={options.link}
                                    onClick={() => setSubMenusPeople(subMenu, label)}
                                  >
                                    {options.value}
                                  </a>
                                </li>
                              ))
                            : ''}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {category === 'Empresas' ? (
                <ul className={`${'d-none d-sm-block d-lg-none' && category === 'Empresas'}`}>
                  {pages.map(({ label, link }) => (
                    <li key={label}>
                      <Link href={link}>
                        <button
                          type="button"
                          className={pageSelect === link ? styles['option-selected-yellow'] : ''}
                          onClick={() => handlePage(link)}
                        >
                          {label}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          </>
        )}
      </header>
    )
  );
};

export default Header;
