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

function* createSearch(action) {
  console.log('creatSearch action', action);

  let response = yield axios.get(`/api/search/${action.payload}`);

  try {
    yield put({
      type: 'SET_SEARCH',
      payload: response.data
    })
  }
  catch (error) {
    console.log('error in createSearch', error)
  }
}

// send favorites to router
function* addFavorite(action) {
  console.log('addFavorite action', action);

  // send post request along with favorite url to favorite router
  yield axios.post(`/api/favorite/`, action.payload);

} // end addFavorite

// rootSaga generator function
function* rootSaga() {

  // Handle POST sent from Favorites when category selected:
  yield takeEvery('CREATE_CATEGORY', createCategory)
  yield takeEvery('CREATE_SEARCH', createSearch)
  yield takeEvery('ADD_FAVORITE', addFavorite)

}

// Create reducer to handle search results received from Giphy:
const searchResults = (state = [], action) => {
  if (action.type === 'SET_SEARCH') {
    return action.payload.data;
  }
  return state;
}

// reducer to handle our favorites
const favoriteResults = (state = [], action) => {
  if (action === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
}

// Saga made
const sagaMiddleware = createSagaMiddleware();
// Store that all the components can use
const storeInstance = createStore(
  combineReducers({
    searchResults,
    favoriteResults
  }),
  //sagaMiddleware for the store
  applyMiddleware(sagaMiddleware, logger),
);
//rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
