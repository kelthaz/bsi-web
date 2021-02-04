import React, { useState } from 'react';
import SvgMenu from '../../svgs/header/SvgMenu';
import SvgLogoBanCoppelInverted from '../../svgs/logos/SvgLogoBanCoppelInverted';
import Avatar from '../../svgs/sidebar/Avatar';
import CerrarSesion from '../../svgs/sidebar/CerrarSesion';
import House from '../../svgs/sidebar/House';
import SvgCross from '../../svgs/SvgCross';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles['container-sidebar']} ${open && styles['sidebar-active']}`}>
      <div className={styles['header-sidebar']}>
        <button className={styles['button-sidebar']} type="button" onClick={() => setOpen(!open)}>
          {open ? <SvgCross /> : <SvgMenu />}
        </button>

        <SvgLogoBanCoppelInverted />
      </div>

      <div className={styles['item-sidebar']}>
        <Avatar />
        <div className={styles['perfil-sidebar']}>
          <p className="color-white sub">Salvador Orozco Hernández</p>
          <p className="color-white overline">Ver pefil</p>
        </div>
      </div>

      <div className={styles['item-sidebar']}>
        <House />
        <p className="color-white sub">Mi tablero</p>
      </div>

      <div className={styles['item-sidebar']}>
        <CerrarSesion />
        <p className="color-white sub">Cerrar sesión</p>
      </div>
    </div>
  );
};

export default Sidebar;
