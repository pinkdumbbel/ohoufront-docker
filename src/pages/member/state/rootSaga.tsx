import { watchUnsplach as login_watchUnsplach } from '../login/state/saga'; // 로그인

export const rootSagaMember = [
  login_watchUnsplach()
]