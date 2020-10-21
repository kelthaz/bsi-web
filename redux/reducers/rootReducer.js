import { combineReducers } from 'redux';
import solicitudReducer from './solicitudReducer';

const reducers = combineReducers({
  solicitud: solicitudReducer,
});

export default reducers;
