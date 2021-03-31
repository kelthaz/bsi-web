import { combineReducers } from 'redux';
import formularioReducer from './formularioReducer';
import perfilProspectoReducer from './perfilProspectoReducer';
import simuladorReducer from './simuladorReducer';
import solicitudReducer from './solicitudReducer';

const reducers = combineReducers({
  solicitud: solicitudReducer,
  simulador: simuladorReducer,
  formulario: formularioReducer,
  prospecto: perfilProspectoReducer,
});

export default reducers;
