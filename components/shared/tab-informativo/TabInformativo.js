import { useRouter } from 'next/router';
import React from 'react';
import SvgChevron from '../../svgs/SvgChevron';
import styles from './tabInformativo.module.scss';
const TabInformativo = (props) => {
  const { show } = props;
  const router = useRouter();
  const { tab } = router.query;
  const tabs = [
    { path: 'datos-personales', label: 'Datos personales' },
    { path: 'datos-empresa', label: 'Datos de tu empresa' },
    { path: 'oferta', label: 'Oferta' },
    { path: 'documentacion', label: 'Documentación' },
  ];
  return (
    show && (
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-2 flex-row-start-config pr-0">
            <button className={styles['buttons-arrow']} type="button">
              <SvgChevron className="rotate-180" />
              <span className="only-lg-inline">Volver</span>
            </button>
          </div>
          <div className="col-8 flex-row-center-config p-0">
            <div className={styles['tab-content']}>
              {tabs.map(({ path, label }) => (
                <span key={path} className={`${tab === path ? styles['tab-active'] : ''} ${styles['tab-info']}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="col-2 flex-row-end-config pl-0">
            <button className={styles['buttons-arrow']} type="button">
              <span className="only-lg-inline">Siguiente</span>
              <SvgChevron />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default TabInformativo;
