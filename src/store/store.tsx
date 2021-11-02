import { sagaMiddleware, rootSaga } from './rootSaga';
import { rootReducer } from './rootReducer';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

// middlewares
//import logger from 'redux-logger';

const devMode = process.env.NODE_ENV === 'development';

const middleware = [sagaMiddleware];
// devMode && middleware.push(logger);

const createStore = () => {
  const store = configureStore({
    devTools: devMode,
    middleware,
    reducer: rootReducer,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type RootState = ReturnType<typeof createStore>;

export default createStore;
