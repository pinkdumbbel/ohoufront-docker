import { combineReducers } from 'redux';
import login_Reducer from '@/pages/member/login/state/'; // 로그인
import signUp_Reducer from '@/pages/member/signUp/state/'; // 회원가입
import myPage_Reducer from '@/pages/member/myPage/state/';
import changePassword_Reducer from '@/pages/member/myPage/state/';

const rootReducerMember = combineReducers({
  login: login_Reducer,
  signUp: signUp_Reducer,
  myPage: myPage_Reducer,
  changePassword: changePassword_Reducer,
});

export default rootReducerMember;
