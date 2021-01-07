import { combineReducers } from 'redux';
import formularioReducer from './formularioReducer';
import simuladorReducer from './simuladorReducer';
import solicitudReducer from './solicitudReducer';

const reducers = combineReducers({
  solicitud: solicitudReducer,
  simulador: simuladorReducer,
  formulario: formularioReducer,
});

export default reducers;
