import Intro from './intro/Intro';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import TodoListo from './todo-listo/TodoListo';
import Felicidades from './felicidades/Felicidades';

const cargaDocumentosRoutes = [
  {
    tab: 'carga-documentos',
    step: 'bienvenida',
    path: '/solicitud/carga-documentos/bienvenida',
    stepNumber: null,
    component: Intro,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '1',
    path: '/solicitud/carga-documentos/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '2',
    path: '/solicitud/carga-documentos/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '3',
    path: '/solicitud/carga-documentos/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: 'todo-listo',
    path: '/solicitud/carga-documentos/todo-listo',
    stepNumber: null,
    component: TodoListo,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: 'felicidades',
    path: '/solicitud/carga-documentos/felicidades',
    stepNumber: null,
    component: Felicidades,
    services: [],
  },
];

export default cargaDocumentosRoutes;