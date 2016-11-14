/**
 * Created by Rod Nolan on 11/10/2016.
 */
import 'babel-polyfill'; // this should be done on a more individual basis
import React from 'react';
import { render } from 'react-dom'; // this was split off from react
import { Router, browserHistory } from 'react-router'; // uses HTML5 pushState()
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
