// import pfaeRoutes from './pfae/pfae.routes';
// import pmRoutes from './pm/pm.routes';

// const obligadoSolidarioRoutes = [...pfaeRoutes];

// export default obligadoSolidarioRoutes;

import BienvenidoObligadoSolidario from './bienvenido/Bienvenido';
import PasoUnoObligadoSolidarioPfae from './paso-uno/pfae/PasoUnoObligadoSolidarioPFAE';
import PasoUnoObligadoSolidarioPm from './paso-uno/pm/PasoUnoObligadoSolidarioPM';
import PasoDosObligadoSolidarioPfae from './paso-dos/pfae/PasoDosObligadoSolidarioPFAE';
import PasoDosObligadoSolidarioPm from './paso-dos/pm/PasoDosObligadoSolidarioPM';
import PasoTresObligadoSolidarioPfae from './paso-tres/pfae/PasoTresObligadoSolidarioPFAE';
import PasoTresObligadoSolidarioPm from './paso-tres/pm/PasoTresObligadoSolidarioPM';
import PasoCuatroObligadoSolidarioPfae from './paso-cuatro/pfae/PasoCuatroObligadoSolidarioPFAE';
import PasoCuatroObligadoSolidarioPm from './paso-cuatro/pm/PasoCuatroObligadoSolidarioPM';
import PasoCincoObligadoSolidarioPfae from './paso-cinco/pfae/PasoCincoObligadoSolidarioPFAE';
import PasoCincoObligadoSolidarioPm from './paso-cinco/pm/PasoCincoObligadoSolidarioPM';
import PasoSeisObligadoSolidarioPfae from './paso-seis/pfae/PasoSeisObligadoSolidarioPFAE';
import PasoSeisObligadoSolidarioPm from './paso-seis/pm/PasoSeisObligadoSolidarioPM';
import PasoSieteObligadoSolidarioPfae from './paso-siete/pfae/PasoSieteObligadoSolidarioPFAE';
import PasoSieteObligadoSolidarioPm from './paso-siete/pm/PasoSieteObligadoSolidarioPM';
import PasoOchoObligadoSolidarioPfae from './paso-ocho/pfae/PasoOchoObligadoSolidarioPFAE';
import PasoOchoObligadoSolidarioPm from './paso-ocho/pm/PasoOchoObligadoSolidarioPM';
import PasoNueveObligadoSolidarioPfae from './paso-nueve/PasoNueveObligadoSolidario';
import PasoDiezObligadoSolidarioPfae from './paso-diez/PasoDiezObligadoSolidarioPFAE';
import PasoOnceObligadoSolidarioPfae from './paso-once/PasoOnceObligadoSolidarioPFAE';
import ContratoLegalexObligadoSolidarioPM from './contrato-legalex/ContratoLegalexObligadoSolidarioPM';
import AgradecimientoFinal from './agradecimiento-final/AgradecimientoFinal';
import AgradecimientoIncompleto from './agradecimiento-incompleto/AgradecimientoIncompleto';
import PruebaComponentes from './prueba-componentes/pruebaComponentes';
import {
  BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE,
  CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE,
  AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
  AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
  PRUEBA_COMPONENTES_OBLIGADO_SOLIDARIO_ROUTE,
} from '../../../../constants/routes/solicitud/obligado';
import { OBLIGADO_SOLIDARIO } from '../../../../constants/formularios';
import { FISICA } from '../../../../constants/persona';

const obligadoSolidarioRoutes = [
  {
    route: BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
    component: [BienvenidoObligadoSolidario],
    services: [],
    roles: [],
    label: 'Bienvenida',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoUnoObligadoSolidarioPfae, PasoUnoObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 1 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 1,
      tipoPersona: '',
      step: 1,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoDosObligadoSolidarioPfae, PasoDosObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 2 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 2,
      tipoPersona: '',
      step: 2,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoTresObligadoSolidarioPfae, PasoTresObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 3 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 3,
      tipoPersona: '',
      step: 3,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoCuatroObligadoSolidarioPfae, PasoCuatroObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 4 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 4,
      tipoPersona: '',
      step: 4,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoCincoObligadoSolidarioPfae, PasoCincoObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 5 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 5,
      tipoPersona: '',
      step: 5,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoSeisObligadoSolidarioPfae, PasoSeisObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 6 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 6,
      tipoPersona: '',
      step: 6,
      tab: ['preguntas'],
    },
  },
  {
    route: PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoSieteObligadoSolidarioPfae, PasoSieteObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 7 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 7,
      tipoPersona: '',
      step: 7,
      tab: ['preguntas', 'carga-documentos'],
    },
  },
  {
    route: PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoOchoObligadoSolidarioPfae, PasoOchoObligadoSolidarioPm],
    services: [],
    roles: [],
    label: 'Paso 8 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 8,
      tipoPersona: '',
      step: 8,
      tab: ['preguntas', 'autorizacion'],
    },
  },
  {
    route: PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoNueveObligadoSolidarioPfae],
    services: [],
    roles: [],
    label: 'Paso 9 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 9,
      tipoPersona: FISICA,
      step: 9,
      tab: ['carga-documentos'],
    },
  },
  {
    route: PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoDiezObligadoSolidarioPfae],
    services: [],
    roles: [],
    label: 'Autorización: Paso 10 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 10,
      tipoPersona: FISICA,
      step: 10,
      tab: ['carga-documentos'],
    },
  },
  {
    route: PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PasoOnceObligadoSolidarioPfae],
    services: [],
    roles: [],
    label: 'Autorización: Paso 10 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 11,
      tipoPersona: FISICA,
      step: 11,
      tab: ['autorizacion'],
    },
  },
  {
    route: CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE,
    component: [ContratoLegalexObligadoSolidarioPM],
    services: [],
    roles: [],
    label: 'Contrato: Paso 9 de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 12,
      tipoPersona: '',
      step: 9,
      tab: ['autorizacion'],
    },
  },
  {
    route: AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [AgradecimientoIncompleto],
    services: [],
    roles: [],
    label: 'Preguntas: Paso agradecimiento incompleto de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 13,
      tipoPersona: FISICA,
      step: null,
      tab: [''],
    },
  },
  {
    route: AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    component: [AgradecimientoFinal],
    services: [],
    roles: [],
    label: 'Autorización: Paso agradecimiento completo de obligado solidario',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 14,
      tipoPersona: FISICA,
      step: null,
      tab: [''],
    },
  },
  {
    route: PRUEBA_COMPONENTES_OBLIGADO_SOLIDARIO_ROUTE,
    component: [PruebaComponentes],
    services: [],
    roles: [],
    label: 'Autorización: Prueba componentes',
    data: {
      formulario: OBLIGADO_SOLIDARIO,
      paso: 15,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
];

export default obligadoSolidarioRoutes;
