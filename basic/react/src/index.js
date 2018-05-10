import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { combinedReducers } from './features/reducer';


const store = createStore(combinedReducers);

const providedApp = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(providedApp, document.getElementById('root'));
registerServiceWorker();
