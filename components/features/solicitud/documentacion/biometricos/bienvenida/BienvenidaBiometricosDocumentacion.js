import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../biometricos.module.scss';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import SvgCargaDocumento from '../../../../../svgs/SvgCargaDocumento';
import { PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const BienvenidaBiometricosDocumentacion = () => {
  const dispatch = useDispatch();
  const { documentacion } = useSelector((state) => state.solicitud);

  const dispatchBiometricos = () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { tab: 'documentacion', step: 'biometrico-bienvenido' },
        datosEmpresa: {
          ...documentacion,
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
              <p className="body2">¡Te damos la bienvenida al proceso de carga de documentos BanCoppel!</p>
              <p className="body2">
                En BanCoppel estamos felices de que estés haciendo una solicitud de crédito con nosotros.
              </p>
              <p className="body2">En este proceso de dos pasos recolectaremos unos documentos para conocerte mejor</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 my-3">
              <div className="text-center">
                <Link as={PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE} replace>
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
  );
};

export default BienvenidaBiometricosDocumentacion;
