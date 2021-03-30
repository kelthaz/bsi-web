import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ANALISTA, CLIENTE, SUPERADMIN, SUPERVISOR } from '../../../../../constants/roles';
import SvgMenu from '../../../../svgs/header/SvgMenu';
import SvgLogoBanCoppelInverted from '../../../../svgs/logos/SvgLogoBanCoppelInverted';
import SvgAvatar from '../../../../svgs/sidebar/SvgAvatar';
import SvgHistorial from '../../../../svgs/sidebar/SvgCarpeta';
import SvgCerrarSesion from '../../../../svgs/sidebar/SvgCerrarSesion';
import SvgHouse from '../../../../svgs/sidebar/SvgHouse';
import SvgList from '../../../../svgs/sidebar/SvgList';
import SvgReportes from '../../../../svgs/sidebar/SvgReportes';
import SvgUsuario from '../../../../svgs/sidebar/SvgUsuario';
import SvgCross from '../../../../svgs/SvgCross';
import styles from './sidebar.module.scss';
import { HISTORIAL, CERRAR, ACTIVIDADES, REPORTE, TABLERO, USUARIOS } from '../../../../../constants/sidebar';

const Sidebar = ({ role, currentItem, primerNombre, primerApellido }) => {
  const [open, setOpen] = useState(false);
  const itemsByRole = [
    {
      name: TABLERO,
      roles: [CLIENTE, ANALISTA, SUPERVISOR, SUPERADMIN],
      icon: <SvgHouse />,
      text: 'Mi tablero',
    },
    {
      name: ACTIVIDADES,
      roles: [ANALISTA, SUPERVISOR],
      icon: <SvgList />,
      text: 'Actividades',
    },
    {
      name: REPORTE,
      roles: [SUPERVISOR, SUPERADMIN],
      icon: <SvgReportes />,
      text: 'Reportes',
    },
    {
      name: USUARIOS,
      roles: [SUPERVISOR, SUPERADMIN],
      icon: <SvgUsuario />,
      text: 'Usuarios',
    },
    {
      name: HISTORIAL,
      roles: [ANALISTA, SUPERVISOR],
      icon: <SvgHistorial />,
      text: 'Historial',
    },
    {
      name: CERRAR,
      roles: [CLIENTE, ANALISTA, SUPERVISOR, SUPERADMIN],
      icon: <SvgCerrarSesion />,
      text: 'Cerrar sesión',
    },
  ];

  return (
    <div className={`${styles['container-sidebar']} ${open ? styles['sidebar-active'] : styles['sidebar-inactive']}`}>
      <div className={styles['header-sidebar']}>
        {open ? (
          <button className={styles['button-sidebar']} type="button" onClick={() => setOpen(false)}>
            <SvgCross />
          </button>
        ) : (
          <button className={styles['button-sidebar']} type="button" onClick={() => setOpen(true)}>
            <SvgMenu />
          </button>
        )}

        <SvgLogoBanCoppelInverted />
      </div>
      <div
        className={`${styles['content-sidebar']} `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className={styles['content-item-sidebar']}>
          <div className="svg-avatar">
            <SvgAvatar />
            <span className="color-white sub">{`${primerNombre.charAt(0)}${primerApellido.charAt(0)}`}</span>
          </div>
          <div className={styles['perfil-sidebar']}>
            <p className="color-white sub">{`${primerNombre} ${primerApellido}`}</p>
            <p className="color-white overline">Ver pefil</p>
          </div>
        </div>
        {itemsByRole
          .filter(({ roles }) => roles.includes(role))
          .map(({ icon, text, name }) => (
            <button type="button" key={text} className={`${styles['item-sidebar']} ${styles['content-item-sidebar']}`}>
              <div>{icon}</div>
              <div>
                <p className={`${currentItem === name ? 'sub' : 'body-2'} color-white`}>{text}</p>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  role: PropTypes.string,
  currentItem: PropTypes.string,
  primerNombre: PropTypes.string,
  primerApellido: PropTypes.string,
};

Sidebar.defaultProps = {
  role: SUPERADMIN,
  currentItem: TABLERO,
  primerNombre: 'JESUS',
  primerApellido: 'GOMEZ',
};

export default Sidebar;
