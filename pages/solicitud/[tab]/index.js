import { useRouter } from 'next/router';
import TabInformativo from '../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../components/shared/step/Step';
import ChatBot from '../../../components/shared/chat-bot/ChatBot';
import Bienvenida from '../../../components/pages/solicitud/bienvenida/Bienvenida';
import DatosPersonales from '../../../components/pages/solicitud/datos-personales/DatosPersonales';
import DatosEmpresa from '../../../components/pages/solicitud/datos-empresa/DatosEmpresa';
import SvgPatronesSolicitud from '../../../components/svgs/SvgPatronesSolicitud';

const Solicitud = () => {
  const router = useRouter();
  const { tab } = router.query;
  let TabComponent = null;

  switch (tab) {
    case 'bienvenida':
      TabComponent = <Bienvenida />;
      break;

    case 'datos-personales':
      TabComponent = <DatosPersonales />;
      break;

    case 'datos-empresa':
      TabComponent = <DatosEmpresa />;
      break;

    default:
      if (tab) {
        router.push('/solicitud/bienvenida');
      }
      break;
  }

  return (
    <>
      <TabInformativo show={false} />
      <Step show={false} />
      {TabComponent}
      <ChatBot show={false} />
      <SvgPatronesSolicitud className="only-lg" />
    </>
  );
};

export default Solicitud;
