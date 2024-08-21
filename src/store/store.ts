import { compose, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
// import thunk from 'redux-thunk';
// import { loggerMiddleware } from './middleware/logger';
import logger from 'redux-logger';

//by default web browser will use local storage
import { legacy_createStore as createStore } from 'redux';

// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV !== 'production' && logger,
//   sagaMiddleware
//   // thunk
// ].filter((middleware): middleware is Middleware => Boolean(middleware));
// could also use redux logger which is easier (import logger from 'redux-logger')
// if its in production the inside of the array will come back FALSE
// .filter(Boolean) filters out FALSE and gives an empty array

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const composedEnhancers = compose(applyMiddleware());
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
