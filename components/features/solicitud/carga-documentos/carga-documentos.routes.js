import Intro from './Intro';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import TodoListo from './TodoListo';
import Felicidades from './Felicidades';

const cargaDocumentosRoutes = [
  {
    tab: 'cargaDocumentos',
    step: 'bienvenida',
    path: '/solicitud/carga-documentos/bienvenida',
    stepNumber: null,
    component: Intro,
    services: [],
  },
  {
    tab: 'cargaDocumentos',
    step: '1',
    path: '/solicitud/carga-documentos/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'cargaDocumentos',
    step: '2',
    path: '/solicitud/carga-documentos/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'cargaDocumentos',
    step: '3',
    path: '/solicitud/carga-documentos/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'cargaDocumentos',
    step: '4',
    path: '/solicitud/carga-documentos/todo-listo',
    stepNumber: null,
    component: TodoListo,
    services: [],
  },
  {
    tab: 'cargaDocumentos',
    step: 'gracias',
    path: '/solicitud/carga-documentos/felicidades',
    stepNumber: null,
    component: Felicidades,
    services: [],
  }
];

export default cargaDocumentosRoutes;
