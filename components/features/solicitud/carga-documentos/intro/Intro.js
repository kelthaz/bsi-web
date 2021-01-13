import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import SvgCargaDocumento from '../../../../svgs/SvgCargaDocumento';

import styles from '../carga-documentos.module.scss';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

const Intro = () => {

  const dispatch = useDispatch();
  const { documentacion } = useSelector((state) => state.solicitud);

  const dispatchBiometricos = () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { tab: 'carga-documentos', step: 'bienvenida' },
        datosEmpresa: {
          ...documentacion
        },
      })
    );
  };

  return (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0 text-center">
        <div className="row">
          <div className="col-xs-12 col-sm-12 my-3">
            <div className={`mx-auto ${styles.elipse}`}>
              <SvgCargaDocumento />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <h2 className="color-blue-storm">Crédito Pyme BanCoppel</h2>
            <p className="body2">
              ¡Te damos la bienvenida al proceso de carga de documentos BanCoppel!
            </p>
            <p className="body2">
              En BanCoppel estamos felices de que estés haciendo una solicitud de crédito
              con nosotros.
            </p>
            <p className="body2">
              En este proceso de dos pasos recolectaremos unos documentos para conocerte mejor
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-last order-md-last order-sm-first order-xs-first my-3">
            <div className="center-second-button">
              <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/1" replace>
                <button type="submit" className="btn-medium" onClick={dispatchBiometricos}>
                  Comenzar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Intro;
