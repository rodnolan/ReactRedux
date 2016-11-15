/**
 * Created by Rod Nolan on 11/10/2016.
 */
import 'babel-polyfill'; // this should be done on a more individual basis
import React from 'react';
import { render } from 'react-dom'; // this was split off from react
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // this is a higher order component that attaches the store to React container components
import { Router, browserHistory } from 'react-router'; // uses HTML5 pushState()
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const atore = configureStore();
// not passing initial state here but you might want to
// if this was a server rendered app
// there's a default value in the reducer anyway so it isn't necessary

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
