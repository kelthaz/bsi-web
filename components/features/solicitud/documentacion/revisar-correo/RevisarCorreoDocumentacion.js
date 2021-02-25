import Link from 'next/link';
import SvgOk from '../../../../svgs/SvgOk';

const RevisarCorreoDocumentacion = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud ">
      <div className="container px-md-2 px-xs-0">
        <div className="row pb-3">
          <div className="col-md-10 px-md-4 px-xs-0">
            <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
              <SvgOk />
            </div>
            <div className="col-md-10 px-xs-0 px-md-2">
              <h2 className="text-xs-center text-md-left color-blue-storm">
                ¡Ya puedes revisar tu correo electrónico!
              </h2>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="body2 text-xs-center text-md-left color-dark-gray sub pt-2">
                Revisa tu bandeja de entrada para que puedas realizar la toma de tus biométricos siguiendo las
                instrucciones que te hemos enviado.
              </p>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="text-xs-center text-md-left pt-2">
                Recuerda que esta es la última parte del proceso y debes realizarla desde tu teléfono celular.
              </p>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="text-xs-center text-md-left pt-2">
                Por favor haz click en el botón de abajo para guardar tu proceso, cerrar sesión y continuar en tu
                teléfono.
              </p>
            </div>
          </div>

          <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-5">
            <SvgOk />
          </div>
        </div>
        <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/bienvenida" replace>
          <button type="submit" className="btn-medium offset-md-4 offset-xs-3">
            Finalizar
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default RevisarCorreoDocumentacion;
