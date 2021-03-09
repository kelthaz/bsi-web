import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/rootReducer';

const storeTest = () => {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware));
  return store;
};

export default storeTest;
