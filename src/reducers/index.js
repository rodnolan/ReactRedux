import {combineReducers} from 'redux';
import coursesReducerAlias from './courseReducer';

// I don't like short-hand property name syntax so I'm using the long hand grammar
// the name on the left hand side is the one you'll use to refer to this reducer, note that it has been aliased above
const rootReducer = combineReducers({
  courses: coursesReducerAlias

});


export default rootReducer;
