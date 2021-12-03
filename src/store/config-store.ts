import { applyMiddleware, createStore, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import LocalStorage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: LocalStorage,
  whitelist: ['auth'],
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const middlewares = [sagaMiddleware]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares), composeEnhancers()))

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
