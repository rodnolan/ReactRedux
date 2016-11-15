/**
 * Created by Rod Nolan on 11/15/2016.
 */

import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );

  // check out react-slingshot for examples of how to configure other pieces of middleware
}
