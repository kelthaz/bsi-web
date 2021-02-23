import BienvenidaDatosPersonales from './bienvenida/BienvenidaDatosPersonales';
import GranSaltoDatosPersonales from './gran-salto/GranSaltoDatosPersonales';
import PasoUnoDatosPersonales from './paso-uno/PasoUnoDatosPersonales';
import PasoDosDatosPersonales from './paso-dos/PasoDosDatosPersonales';
import PasoTresDatosPersonales from './paso-tres/PasoTresDatosPersonales';
import PasoCuatroDatosPersonales from './paso-cuatro/PasoCuatroDatosPersonales';
import PasoCincoDatosPersonales from './paso-cinco/PasoCincoDatosPersonales';
import Agradecimiento from './agradecimiento/AgradecimientoDatosPersonales';
import SectoresRepositorio from '../../../../services/simulador/sectores.repositorio';
import {
  AGRADECIMIENTO_DATOS_PERSONA_ROUTE,
  BIENVENIDA_DATOS_PERSONA_ROUTE,
  GRAN_SALTO_DATOS_PERSONA_ROUTE,
  PASO_CINCO_DATOS_PERSONA_ROUTE,
  PASO_CUATRO_DATOS_PERSONA_ROUTE,
  PASO_DOS_DATOS_PERSONA_ROUTE,
  PASO_TRES_DATOS_PERSONA_ROUTE,
  PASO_UNO_DATOS_PERSONA_ROUTE,
} from '../../../../constants/routes/solicitud/persona';
import { DATO_PERSONA } from '../../../../constants/formularios';

const datosPersonalesRoutes = [
  {
    route: BIENVENIDA_DATOS_PERSONA_ROUTE,
    component: [BienvenidaDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Bienvenida',
    data: {
      formulario: DATO_PERSONA,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: '',
    },
  },
  {
    route: GRAN_SALTO_DATOS_PERSONA_ROUTE,
    component: [GranSaltoDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Gran salto',
    data: {
      formulario: DATO_PERSONA,
      paso: 1,
      tipoPersona: '',
      step: null,
      tab: '',
    },
  },
  {
    route: PASO_UNO_DATOS_PERSONA_ROUTE,
    component: [PasoUnoDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 1 de datos personales',
    data: {
      formulario: DATO_PERSONA,
      paso: 2,
      tipoPersona: '',
      step: 1,
      tab: 'datos-personales',
    },
  },
  {
    route: PASO_DOS_DATOS_PERSONA_ROUTE,
    component: [PasoDosDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 2 de datos personales',
    data: {
      formulario: DATO_PERSONA,
      paso: 3,
      tipoPersona: '',
      step: 2,
      tab: 'datos-personales',
    },
  },
  {
    route: PASO_TRES_DATOS_PERSONA_ROUTE,
    component: [PasoTresDatosPersonales],
    services: [{ name: 'sectores', service: SectoresRepositorio.getSectores }],
    roles: [],
    label: 'Solicitud: Paso 3 de datos personales',
    data: {
      formulario: DATO_PERSONA,
      paso: 4,
      tipoPersona: '',
      step: 3,
      tab: 'datos-personales',
    },
  },
  {
    route: PASO_CUATRO_DATOS_PERSONA_ROUTE,
    component: [PasoCuatroDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 4 de datos personales',
    data: {
      formulario: DATO_PERSONA,
      paso: 5,
      tipoPersona: '',
      step: 4,
      tab: 'datos-personales',
    },
  },
  {
    route: PASO_CINCO_DATOS_PERSONA_ROUTE,
    component: [PasoCincoDatosPersonales],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 5 de datos personales',
    data: {
      formulario: DATO_PERSONA,
      paso: 6,
      tipoPersona: '',
      step: 5,
      tab: 'datos-personales',
    },
  },
  {
    route: AGRADECIMIENTO_DATOS_PERSONA_ROUTE,
    component: [Agradecimiento],
    services: [],
    roles: [],
    label: 'Solicitud: agradecimiento',
    data: {
      formulario: DATO_PERSONA,
      paso: 7,
      tipoPersona: '',
      step: null,
      tab: '',
    },
  },
];

export default datosPersonalesRoutes;
