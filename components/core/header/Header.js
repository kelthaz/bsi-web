/* eslint-disable complexity */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import SearchBox from '../search-box/SearchBox';
import Modal from '../../shared/modal/Modal';

const Header = () => {
  const { pathname, push } = useRouter();
  const pages = [
    { label: 'Inicio', link: 'inicio' },
    { label: 'Crédito Digital Pyme', link: 'credito-pyme' },
    { label: 'Requisitos', link: 'requisitos' },
    { label: 'Simulador', link: 'simulador' },
    { label: 'Beneficios', link: 'beneficios' },
    { label: 'Ayuda', link: 'ayuda' },
  ];

  const menuOptions = [
    { label: 'Cuenta Eje', link: 'https://www.bancoppel.com/cuenta_eje/empresarial.html' },
    { label: 'EmpresaNet', link: 'https://www.bancoppel.com/empresanet_bcopp/empresanet.html' },
    { label: 'Nómina BanCoppel', link: 'https://www.bancoppel.com/nomina_empresas/nomina.html' },
    { label: 'BanCoppel Pyme', link: '#' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState({ category: 'Empresas', option: 'BanCoppel Pyme' });
  const [pageSelect, setPageSelect] = useState();
  const [toggleSearchBox, setToggleSearchBox] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setPageSelect(pathname.slice(1));
  }, [pathname]);

  const { category } = menuSelect;

  const handleMenu = () => setMenuOpen(!menuOpen);

  const handleCategory = ({ target }) => {
    setMenuSelect({ ...menuSelect, category: target.innerHTML });
  };

  const handlePage = (target) => {
    setPageSelect(target);
    setMenuOpen(false);
  };

  const handletToggleSearchBox = () => {
    setToggleSearchBox(!toggleSearchBox);
    setMenuOpen(false);
  };

  const handleModal = () => {
    setOpenModal(false);
    push('/simulador');
  };

  return (
    <header>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className={styles['modal-container']}>
          <h4 className="color-blue-storm">Estas por salir del proceso...</h4>
          <p className="dark-gray body2">
            En este punto tu información no se guardará y deberás comenzar desde el principio si decides retomar tu
            solicitud. ¿Estás seguro de querer salirte?
          </p>
          <div className="flex-row-center-config">
            <button type="button" className="btn-medium-secondary mr-2" onClick={handleModal}>
              Sí, salir
            </button>

            <button type="button" className="btn-medium ml-2" onClick={() => setOpenModal(false)}>
              No, continuar
            </button>
          </div>
        </div>
      </Modal>
      <div className={`${styles['header-top']} ${menuOpen ? styles['menu-active'] : styles['menu-inactive']}`}>
        <div>
          {!pathname.includes('solicitud') && (
            <button type="button" onClick={handleMenu}>
              {}
            </button>
          )}
          <img src={menuOpen ? '/bancoppel-pymes-blanco.svg' : '/bancoppel-pymes.svg'} className="logo" alt="" />
        </div>
        <div>
          {pathname.includes('solicitud') ? (
            <img src="/circle-cross.svg" alt="" onClick={() => setOpenModal(true)} />
          ) : (
            <img src={menuOpen ? '/search.svg' : '/search-blue.svg'} alt="" onClick={handletToggleSearchBox} />
          )}
          {!pathname.includes('solicitud') && (
            <button type="button" className={menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}>
              Inicia sesión
            </button>
          )}
          {!pathname.includes('solicitud') && (
            <Link href="simulador">
              <button type="button" className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}>
                Solicita tu crédito
              </button>
            </Link>
          )}
          {!pathname.includes('solicitud') && <button type="button">{}</button>}
        </div>
      </div>
      {toggleSearchBox ? <SearchBox unmount={handletToggleSearchBox} /> : null}
      {!menuOpen && !pathname.includes('solicitud') && (
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
            <ul>
              <li className={category === 'Personas' ? styles['category-selected'] : ''}>
                <h4 onClick={handleCategory}>Personas</h4>
              </li>
              <li className={category === 'Empresas' ? styles['category-selected'] : ''}>
                <h4 onClick={handleCategory}>Empresas</h4>
              </li>
            </ul>
          </div>
          <div className={`${styles['items-menu']} ${styles['menu-active']}`}>
            <ul>
              {menuOptions.map(({ label, link }) => (
                <li key={link} className={label === 'BanCoppel Pyme' ? styles['option-selected'] : ''}>
                  <a target="_blank" rel="noreferrer" href={link} onClick={() => setMenuOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
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
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
