import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const middlewares = [thunk];
let devtools = (x) => x;

if (
  process.env.NODE_ENV !== 'production' &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configStore = () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares), devtools),
  );
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default configStore;
