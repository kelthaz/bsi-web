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
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <div className="row">
            <div className="col-md-3 col-xs-12 order-md-last d-flex justify-content-center flex-md-column">
              <div className={`mx-auto ${styles.elipse}`}>
                <SvgCargaDocumento />
              </div>
            </div>
            <div className="col-md-9 col-xs-12">
              <h2 className="text-xs-center text-md-left color-blue-storm mt-2">Crédito Pyme BanCoppel</h2>
              <p className="body2 text-xs-center text-md-left">
                ¡Te damos la bienvenida al proceso de carga de documentos BanCoppel!
              </p>
              <p className="body2 text-xs-center text-md-left">
                En BanCoppel estamos felices de que estés haciendo una solicitud de crédito con nosotros.
              </p>
              <p className="body2 text-xs-center text-md-left">
                En este proceso de dos pasos recolectaremos unos documentos para conocerte mejor
              </p>
            </div>
          </div>

          <div className="row">
            <Link href={PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE}>
              <button type="submit" className="btn-medium offset-md-4 offset-xs-3" onClick={dispatchBiometricos}>
                Comenzar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BienvenidaBiometricosDocumentacion;
