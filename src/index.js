import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import jsCookie from 'js-cookie';
import store from './store';
import Router from './router';
import './assets/style/index.css';

React.Component.prototype.$axios = axios;
React.Component.prototype.$cookie = jsCookie;

ReactDOM.render(
  <Provider store={store}>
    <Router></Router>
  </Provider>,
  document.getElementById('root')
);
