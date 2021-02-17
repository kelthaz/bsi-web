import {
  AGRADECIMIENTO_COMPLETO_SOLIDARIO_ROUTE,
  AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
  BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
  CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
} from '../../../../../constants/routes/solicitud/obligado';
import SectoresRepositorio from '../../../../../services/simulador/sectores.repositorio';
import AgredecimientoFinal from './agradecimiento-final/AgredecimientoFinal';
import AgradecimientoIncompleto from './agradecimiento-incompleto/AgradecimientoIncompleto';
import BienvenidoObligadoSolidario from './bienvenido/BienvenidoObligadoSolidario';
import StepEight from './paso-ocho/PasoOchoObligadoSolidarioPm';
import PasoCincoObligadoSolidarioPM from './paso-cinco/PasoCincoObligadoSolidarioPM';
import PasoCuatroObligadoSolidarioPM from './paso-cuatro/PasoCuatroObligadoSolidarioPM';
import StepNine from './contrato-legalex/ContratoLegalexObligadoSolidarioPM';
import PasoUnoObligadoSolidarioPM from './paso-uno/PasoUnoObligadoSolidarioPM';
import PasoSieteObligadoSolidarioPM from './paso-siete/PasoSieteObligadoSolidarioPM';
import PasoSeisObligadoSolidarioPM from './paso-seis/PasoSeisObligadoSolidarioPM';
import PasoTresObligadoSolidarioPM from './paso-tres/PasoTresObligadoSolidarioPM';
import PasoDosObligadoSolidarioPM from './paso-dos/PasoDosObligadoSolidarioPM';

const pmRoutes = [
  {
    tab: 'preguntas',
    step: 'bienvenido',
    path: BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: BienvenidoObligadoSolidario,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '1',
    path: PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 1,
    component: PasoUnoObligadoSolidarioPM,
    services: [{ name: 'sectores', service: SectoresRepositorio.getSectores }],
  },
  {
    tab: 'preguntas',
    step: '2',
    path: PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 2,
    component: PasoDosObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '3',
    path: PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 3,
    component: PasoTresObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '4',
    path: PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 4,
    component: PasoCuatroObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '5',
    path: PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 5,
    component: PasoCincoObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '6',
    path: PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 6,
    component: PasoSeisObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '7',
    path: PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 7,
    component: PasoSieteObligadoSolidarioPM,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '8',
    path: PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '9',
    path: CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: StepNine,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '10',
    path: AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: AgradecimientoIncompleto,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: 'agradecimiento-final',
    path: AGRADECIMIENTO_COMPLETO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: AgredecimientoFinal,
    services: [],
  },
  // {
  //   tab: 'preguntas',
  //   step: '11',
  //   path: '/obligado-solidario/pfae/preguntas/11',
  //   stepNumber: 11,
  //   component: StepEleven,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: 'Agradecimiento',
  //   path: '/obligado-solidario/pfae/preguntas/agradecimiento',
  //   stepNumber: null,
  //   component: Agradecimiento,
  //   services: [],
  // },
];

export default pmRoutes;
