import { combineReducers } from 'redux';
import simuladorReducer from './simuladorReducer';
import solicitudReducer from './solicitudReducer';

const reducers = combineReducers({
  solicitud: solicitudReducer,
  simulador: simuladorReducer,
});

export default reducers;
