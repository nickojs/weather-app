import React from 'react';
import ReactDOM from 'react-dom';
import {
  combineReducers, createStore, applyMiddleware, compose
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import searchReducer from './store/reducers/search';
import weatherReducer from './store/reducers/weather';

const rootReducer = combineReducers({
  search: searchReducer,
  weather: weatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
