import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';

const Header = () => {
  const { pathname } = useRouter();
  const pages = [
    { label: 'Inicio', link: 'inicio' },
    { label: 'Crédito Pyme', link: 'credito-pyme' },
    { label: 'Requisitos', link: 'requisitos' },
    { label: 'Simulador', link: 'simulador' },
    { label: 'Beneficios', link: 'beneficios' },
    { label: 'Ayuda', link: 'ayuda' },
  ];
  const menuOptions = ['Cuenta Eje', 'EmpresaNet', 'Nómina BanCoppel', 'BanCoppel Pyme'];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState({ category: 'Empresas', option: 'BanCoppel Pyme' });
  const [pageSelect, setPageSelect] = useState();

  useEffect(() => {
    setPageSelect(pathname.slice(1));
  }, [pathname]);

  const { category, option } = menuSelect;

  const handleMenu = () => setMenuOpen(!menuOpen);

  const handleCategory = ({ target }) => {
    setMenuSelect({ ...menuSelect, category: target.innerHTML });
  };

  const handleOption = ({ target }) => {
    setMenuSelect({ ...menuSelect, option: target.innerHTML });
  };

  const handlePage = (target) => {
    setPageSelect(target);
    setMenuOpen(false);
  };

  return (
    <header>
      <div className={`${styles['header-top']} ${menuOpen ? styles['menu-active'] : styles['menu-inactive']}`}>
        <div>
          <button type="button" onClick={handleMenu}>
            {}
          </button>
          <img src={menuOpen ? '/bancoppel-pymes-blanco.svg' : '/bancoppel-pymes.svg'} className="logo" alt="" />
        </div>
        <div>
          <img src="/search.svg" alt="" />
          <button type="button" className={menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}>
            Iniciar sesión
          </button>
          <button type="button" className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}>
            Solicitar crédito
          </button>
          <button type="button">{}</button>
        </div>
      </div>
      {!menuOpen && (
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
          <div className={`${styles['items-menu']} ${menuOpen ? styles['menu-active'] : ''}`}>
            <ul>
              {menuOptions.map((opt) => (
                <li key={opt} className={option === opt ? styles['option-selected'] : ''}>
                  <a onClick={handleOption}>{opt}</a>
                </li>
              ))}
            </ul>
            <ul>
              {pages.map(({ label, link }) => (
                <li key={label}>
                  <Link href={link} onClick={handlePage}>
                    <a
                      className={pageSelect === link ? styles['option-selected-yellow'] : ''}
                      onClick={() => handlePage(link)}
                    >
                      {label}
                    </a>
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
