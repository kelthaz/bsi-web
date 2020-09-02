import { useState } from 'react';
import styles from './header.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState('persona');

  const handleMenu = () => {
    return setMenuOpen(!menuOpen);
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
              <li>Inicio</li>
              <li>Crédito Pyme</li>
              <li>Requisitos</li>
              <li>Simulador</li>
              <li>Beneficios</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </>
      )}

      {menuOpen && (
        <>
          <div className={styles['menu-header']}>
            <div>
              <img src="/cross.svg" className="logo" alt="" onClick={handleMenu} />
              <img src="/bancoppel-pymes-blanco.svg" className="logo" alt="" />
            </div>
            <div>
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
              <li>
                <h4>Personas</h4>
              </li>
              <li>
                <h4>Personas</h4>
              </li>
            </ul>
          </div>
          <div className={styles['items-menu']}>
            <ul>
              <li>
                <a href="/">Servicio 1</a>
              </li>
              <li>
                <a href="/">Servicio 2</a>
              </li>
              <li>
                <a href="/">Servicio 3</a>
              </li>
              <li>
                <a href="/">Servicio 4</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
