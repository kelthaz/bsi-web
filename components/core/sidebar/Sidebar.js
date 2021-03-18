import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ANALISTA, CLIENTE, SUPERADMIN, SUPERVISOR } from '../../../constants/roles';
import SvgMenu from '../../svgs/header/SvgMenu';
import SvgLogoBanCoppelInverted from '../../svgs/logos/SvgLogoBanCoppelInverted';
import SvgAvatar from '../../svgs/sidebar/SvgAvatar';
import SvgHistorial from '../../svgs/sidebar/SvgCarpeta';
import SvgCerrarSesion from '../../svgs/sidebar/SvgCerrarSesion';
import SvgHouse from '../../svgs/sidebar/SvgHouse';
import SvgList from '../../svgs/sidebar/SvgList';
import SvgReportes from '../../svgs/sidebar/SvgReportes';
import SvgUsuario from '../../svgs/sidebar/SvgUsuario';
import SvgCross from '../../svgs/SvgCross';
import styles from './sidebar.module.scss';
import { CARPETA, CERRAR, LISTA, REPORTE, TABLERO, USUARIOS } from '../../../constants/sidebar';

const Sidebar = ({ role, currentItem }) => {
  const [open, setOpen] = useState(false);

  const itemsByRole = [
    {
      name: TABLERO,
      roles: [CLIENTE, ANALISTA, SUPERVISOR, SUPERADMIN],
      icon: <SvgHouse />,
      text: 'Mi tablero',
    },
    {
      name: LISTA,
      roles: [ANALISTA, SUPERVISOR],
      icon: <SvgList />,
      text: 'Mi lista',
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
      name: CARPETA,
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
    <div className={`${styles['container-sidebar']} ${open && styles['sidebar-active']}`}>
      <div className={styles['header-sidebar']}>
        <button className={styles['button-sidebar']} type="button" onClick={() => setOpen(!open)}>
          {open ? <SvgCross /> : <SvgMenu />}
        </button>

        <SvgLogoBanCoppelInverted />
      </div>
      <div className={styles['item-sidebar']}>
        <SvgAvatar />
        <div className={styles['perfil-sidebar']}>
          <p className="color-white sub">Salvador Orozco Hernández</p>
          <p className="color-white overline">Ver pefil</p>
        </div>
      </div>
      {itemsByRole
        .filter(({ roles }) => roles.includes(role))
        .map(({ icon, text, name }) => (
          <div key={text} className={styles['item-sidebar']}>
            {icon}
            <p className={`${currentItem === name ? 'sub' : 'body-2'} color-white`}>{text}</p>
          </div>
        ))}
    </div>
  );
};

Sidebar.propTypes = {
  role: PropTypes.string,
  currentItem: PropTypes.string,
};

Sidebar.defaultProps = {
  role: SUPERADMIN,
  currentItem: TABLERO,
};

export default Sidebar;
