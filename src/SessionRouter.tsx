import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import SignUpPage from './pages/member/signUp/container/SignUpPage';
import MyPage from './pages/member/myPage/container/MyPage';
import App from './App';
import CategoryPage from './pages/market/category/container/CategoryPage';
import { useSelector } from 'react-redux';
import { getState } from './pages/member/login/state';

const SessionRouter: React.FC = () => {
  const userToken = useSelector((state) => getState(state).userToken);

  if (userToken) {
    // 사용자 토큰이 없으면 로그인 페이지
    return (
      <Router>
        <Switch>
          <Route path="/" component={CategoryPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/signUp" component={SignUpPage} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/market" component={App} />
          <Route path="/admin" component={App} />
        </Switch>
      </Router>
    );
  }
  return null;

  // 사용자 토큰이 있으면 기본 라우팅
  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/" component={CategoryPage} exact />
  //     </Switch>
  //   </Router>
  // );
};

export default SessionRouter;
