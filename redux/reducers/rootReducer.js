import { combineReducers } from 'redux';
import formularioReducer from './formularioReducer';
import obligadoSolidarioReducer from './obligadoSolidarioReducer';
import simuladorReducer from './simuladorReducer';
import solicitudReducer from './solicitudReducer';

const reducers = combineReducers({
  solicitud: solicitudReducer,
  simulador: simuladorReducer,
  formulario: formularioReducer,
  obligado: obligadoSolidarioReducer,
});

export default reducers;
