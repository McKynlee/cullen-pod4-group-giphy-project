import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// Redux-saga:
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// rootSaga generator function
function* rootSaga() {

}

const sagaMiddleware = createSagaMiddleware();
// Store that all the components can use
const storeInstance = createStore(
  combineReducers({

  }),
  //sagaMiddleware for the store
  applyMiddleware(sagaMiddleware, logger),
);
//rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
