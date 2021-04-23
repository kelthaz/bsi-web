import { DOCUMENTACION_OBLIGADO_SOLIDARIO } from '../../../../../constants/formularios';
import {
  AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE,
  PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
  PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
} from '../../../../../constants/routes/solicitud/documentacion';
import PasoUnoDocumentacionObligadoSolidario from './paso-uno/PasoUnoDocumentacionObligadoSolidario';
import PasoDosDocumentacionObligadoSolidario from './paso-dos/PasoDosDocumentacionObligadoSolidario';
import RevisarCorreoDocumentacionObligadoSolidario from './revisar-correo/RevisarCorreoDocumentacionObligadoSolidario';
import { CLIENTE } from '../../../../../constants/roles';

const obligadoSolidarioDocumentacionRoutes = [
  {
    route: PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [PasoUnoDocumentacionObligadoSolidario],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Obligado solidario paso 1',
    data: {
      formulario: DOCUMENTACION_OBLIGADO_SOLIDARIO,
      paso: 0,
      tipoPersona: '',
      step: 1,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [PasoDosDocumentacionObligadoSolidario],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Obligado solidario paso 2',
    data: {
      formulario: DOCUMENTACION_OBLIGADO_SOLIDARIO,
      paso: 1,
      tipoPersona: '',
      step: 2,
      tab: ['documentacion'],
    },
  },
  {
    route: AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [RevisarCorreoDocumentacionObligadoSolidario],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Revisar correo',
    data: {
      formulario: DOCUMENTACION_OBLIGADO_SOLIDARIO,
      paso: 3,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
];

export default obligadoSolidarioDocumentacionRoutes;
