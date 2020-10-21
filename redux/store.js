import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/rootReducer';

let globalStore;

const initStore = (initialState) =>
  createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const initializeStore = (preloadedState) => {
  let privateStore = globalStore ?? initStore(preloadedState);

  // Después de navegar a una página con un estado inicial de Redux, fusiona ese estado
  // con el estado actual del store y crea un nuevo store
  if (preloadedState && globalStore) {
    privateStore = initStore({
      ...globalStore.getState(),
      ...preloadedState,
    });
    // Restablece el store actual
    globalStore = undefined;
  }

  // Para SSG y SSR siempre cree un nuevo store
  if (typeof window === 'undefined') return privateStore;
  // Crea el store una vez en el cliente
  if (!globalStore) globalStore = privateStore;

  return privateStore;
};

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
