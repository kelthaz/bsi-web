import {
  AVISO_ROUTE,
  AYUDA_ROUTE,
  BENEFICIOS_ROUTE,
  CREDITO_ROUTE,
  INICIO_ROUTE,
  REQUISITOS_ROUTE,
  SIMULADOR_ROUTE,
} from '../../../constants/routes/publico/publico';
import SelectorSimulador from './simulador/Simulador';
import Ayuda from './ayuda/Ayuda';
import Credito from './credito/Credito';
import Inicio from './inicio/Inicio';
import Requisitos from './requisitos/Requisitos';
import SimuladorRepositorio from '../../../services/simulador/simulador.repositorio';
import AccordionRepositorio from '../../../services/simulador/acordeon.repositorio';
import Beneficios from './beneficios/Beneficios';
import AvisoPrivacidad from './aviso/AvisoPrivacidad';
import AvisoRepositorio from '../../../services/publico/aviso.repositorio';

const publicoRoutes = [
  {
    route: INICIO_ROUTE,
    component: Inicio,
    services: [{ name: 'catalogo', service: SimuladorRepositorio.getSimuladorCatalogo, params: '' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'inicio',
    },
  },
  {
    route: CREDITO_ROUTE,
    component: Credito,
    services: [{ name: 'accordionItems', service: AccordionRepositorio.getAccordionPorSector, params: 'credito-pyme' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'credito',
    },
  },
  {
    route: REQUISITOS_ROUTE,
    component: Requisitos,
    services: [{ name: 'accordionItems', service: AccordionRepositorio.getAccordionPorSector, params: 'requisitos' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'requisitos',
    },
  },
  {
    route: SIMULADOR_ROUTE,
    component: SelectorSimulador,
    services: [{ name: 'catalogo', service: SimuladorRepositorio.getSimuladorCatalogo, params: '' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'simulador',
    },
  },
  {
    route: BENEFICIOS_ROUTE,
    component: Beneficios,
    services: [],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'beneficios',
    },
  },
  {
    route: AYUDA_ROUTE,
    component: Ayuda,
    services: [{ name: 'accordionItems', service: AccordionRepositorio.getAccordionPorSector, params: 'ayuda' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'ayuda',
    },
  },
  {
    route: AVISO_ROUTE,
    component: AvisoPrivacidad,
    services: [{ name: 'avisoItems', service: AvisoRepositorio.getAviso, params: '' }],
    roles: [],
    feature: 'publico',
    data: {
      tab: 'ayuda',
    },
  },
].map((route) => ({ ...route, feature: 'publico' }));

export default publicoRoutes;
