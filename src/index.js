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

// reducer to store search results
const searchGifReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      // add search results to reducer
      return [...state, action.payload];
  }
  return state;
}; // end searchGifReducer


// saga to grab search input and send to server
function* fetchGifSearch(action) {
  console.log('in fetchGifSearch', action);

  try {
    // send payload to search router
    yield axios.get('/api/search', action.payload);

    // send results from search router to searchGifReducer
    yield put({
      type: 'SET_SEARCH_RESULTS',
      payload: response.data
    })
  }
  catch(error) {
    console.log('error fetchGifSearch', error);
  }
}


// rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_GIF_SEARCH', fetchGifSearch);
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
