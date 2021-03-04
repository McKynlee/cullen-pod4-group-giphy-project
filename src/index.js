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

// Handle PUT sent from Favorites when new category selected:
function* createCategory(action) {
  console.log('createCategory action:', action);

  // PUT/update selected category to the server:
  try {
    yield axios.put(`/api/favorite/${action.payload}`);

    // Fetch the latest data from the server:
    // yield put({
    //   type: 'FETCH_FAVORITES'
    // })
  }
  catch (err) {
    console.log('category POST failed:', err);
  }
}

function* createSearch(action)
console.log('creatSearch action', action);



// rootSaga generator function
function* rootSaga() {

  // Handle POST sent from Favorites when category selected:
  yield takeEvery('CREATE_CATEGORY', createCategory)
  yield takeEvery('CREATE_SEARCH', createSearch)

  yield takeEvery('FETCH_GIF_SEARCH', fetchGifSearch);
}
// Saga made
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
