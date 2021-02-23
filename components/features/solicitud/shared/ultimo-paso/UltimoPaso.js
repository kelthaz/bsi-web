import Link from 'next/link';
import { REVISAR_CORREO_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';

const UltimoPaso = () => (
  <div className="contedor-fixed-tab">
    <div className="contedor-solicitud">
      <div className="container">
        <div className="row ">
          <h2 className="color-blue-storm">Para el último paso</h2>
          <p>Te explicaremos como realizar la toma de tus biométricos, ¡es muy sencillo! </p>
          <p className="mt-2">
            Las instrucciones se enviarán a tu correo electrónico. Es muy importante que accedas al proceso desde tu
            télefono celular.
          </p>
          <p className="mt-2">Deberás tener a la mano:</p>
          <div className="mt-3 card-simple-blue-light list-onboarding">
            <ul>
              <li>Identificación oficial</li>{' '}
            </ul>
          </div>
        </div>
        <div className="flex-column-center-config mt-2">
          <Link href={REVISAR_CORREO_DOCUMENTACION_ROUTE}>
            <button type="submit" className="btn-big">
              Enviar instrucciones
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default UltimoPaso;
