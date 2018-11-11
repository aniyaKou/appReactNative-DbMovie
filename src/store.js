// @flow
import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import indexReducer from './reducers/index';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  indexReducer,
  applyMiddleware(),
);

// sagaMiddleware.run(/* Your root saga */);

export default store;
