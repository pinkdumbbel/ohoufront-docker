// import { watchUnsplach as login_watchUnsplach } from '../login/state/saga'; // 로그인
import { watchUnsplach as login_watchUnsplach } from '@/pages/member/login/state/saga'; // 로그인
import { watchUnsplach as signUp_watchUnsplach } from '@/pages/member/signUp/state/saga'; // 회원가입
import { watchUnsplach as myPage_watchUnsplach } from '@/pages/member/myPage/state/saga';

export const rootSagaMember = [login_watchUnsplach(), signUp_watchUnsplach(), myPage_watchUnsplach()];
