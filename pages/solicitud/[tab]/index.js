import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TabInformativo from '../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../components/shared/step/Step';
import ChatBot from '../../../components/shared/chat-bot/ChatBot';
import Bienvenida from '../../../components/pages/solicitud/bienvenida/Bienvenida';
import DatosPersonales from '../../../components/pages/solicitud/datos-personales/DatosPersonales';
import DatosEmpresa from '../../../components/pages/solicitud/datos-empresa/DatosEmpresa';
import SvgPatronesSolicitud from '../../../components/svgs/SvgPatronesSolicitud';

const Solicitud = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showComponents, setShowComponents] = useState(false);
  const router = useRouter();
  const { tab } = router.query;
  let TabComponent = null;

  useEffect(() => {
    switch (tab) {
      case 'bienvenida':
        setShowComponents(false);
        break;

      case 'datos-personales':
        setShowComponents(true);
        break;

      case 'datos-empresa':
        break;

      default:
        break;
    }
  }, [tab]);

  switch (tab) {
    case 'bienvenida':
      TabComponent = <Bienvenida />;
      break;

    case 'datos-personales':
      TabComponent = <DatosPersonales currentStep={currentStep} setCurrentStep={setCurrentStep} />;
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
      <TabInformativo show={showComponents} />
      <Step show={showComponents} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {TabComponent}
      <ChatBot show={showComponents} />
      <SvgPatronesSolicitud className="only-lg fixed-left-bottom" />
    </>
  );
};

export default Solicitud;
