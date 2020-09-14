/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styles from './header.module.scss';

export const Header = () => {
  const pages = ['Inicio', 'Crédito Pyme', 'Requisitos', 'Simulador', 'Beneficios', 'Ayuda'];
  const menuOptions = ['Cuenta Eje', 'EmpresaNet', 'Nómina BanCoppel', 'BanCoppel Pyme'];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState({ category: 'Empresas', option: 'BanCoppel Pyme' });
  const [pageSelect, setPageSelect] = useState('Inicio');

  const { category, option } = menuSelect;

  const handleMenu = () => setMenuOpen(!menuOpen);

  const handleCategory = ({ target }) => {
    setMenuSelect({ ...menuSelect, category: target.innerHTML });
  };

  const handleOption = ({ target }) => {
    setMenuSelect({ ...menuSelect, option: target.innerHTML });
  };

  const handlePage = ({ target }) => {
    setPageSelect(target.innerHTML);
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
            {pages.map((page) => (
              <li key={page} className={pageSelect === page ? styles['option-selected'] : ''}>
                <a onClick={handlePage}>{page}</a>
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
              {pages.map((page) => (
                <li key={page} className={pageSelect === page ? styles['option-selected-yellow'] : ''}>
                  <a onClick={handlePage}>{page}</a>
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
