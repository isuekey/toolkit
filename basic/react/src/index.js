import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { combinedReducers } from './reducer';


const store = createStore(combinedReducers);

const providedApp = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(providedApp, document.getElementById('root'));
registerServiceWorker();
