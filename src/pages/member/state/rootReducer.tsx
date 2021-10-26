import { combineReducers } from 'redux';
// import login_Reducer from '../login/state/index';
import login_Reducer from '@/pages/member/login/state/index'; // 로그인
import signUp_Reducer from '@/pages/member/signUp/state/index'; // 회원가입

const rootReducerMember = combineReducers({
  login: login_Reducer,
  signUp: signUp_Reducer,
});

export default rootReducerMember;
