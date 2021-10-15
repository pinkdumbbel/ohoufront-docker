import { combineReducers } from 'redux';
import login_Reducer from '../login/state/index';


const rootReducerMember = combineReducers({
  login: login_Reducer,
})

export default rootReducerMember;