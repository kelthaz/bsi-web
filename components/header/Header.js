/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styles from './header.module.scss';

export const Header = () => {
  const pages = ['Inicio', 'Crédito', 'Requisitos', 'Simulador', 'Beneficios', 'Ayuda'];
  const menuOptions = ['Cuenta Eje', 'EmpresaNet', 'Nómina BanCoppel', 'BanCoppel Pyme'];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState({ category: '', option: '' });
  const [pageSelect, setPageSelect] = useState('');

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
    <>
      {!menuOpen && (
        <>
          <div className={styles['header-top']}>
            <div>
              <img src="/menu.svg" className="logo" alt="" onClick={handleMenu} />
              <img src="/bancoppel-pymes.svg" className="logo" alt="" />
            </div>
            <div>
              <button type="button" className="btn-medium-secondary">
                Iniciar sesión
              </button>
              <button type="button" className="btn-medium">
                Solicitar crédito
              </button>
            </div>
          </div>
          <div className={styles['header-bottom']}>
            <ul>
              {pages.map((page) => (
                <li key={page} className={pageSelect === page ? styles['option-selected'] : ''}>
                  <a onClick={handlePage}>{page}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {menuOpen && (
        <>
          <div className={`${styles['menu-header']} header-active`}>
            <div>
              <img src="/cross.svg" className="logo" alt="" onClick={handleMenu} />
              <img src="/bancoppel-pymes-blanco.svg" className="logo" alt="" />
            </div>
            <div>
              <img src="/search.svg" className="logo" alt="" />
              <button type="button" className="btn-medium-secondary">
                Iniciar sesión
              </button>
              <button type="button" className="btn-medium-yellow">
                Solicitar crédito
              </button>
            </div>
          </div>
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
          <div className={styles['items-menu']}>
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
    </>
  );
};

export default Header;
