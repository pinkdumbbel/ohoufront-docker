import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import SignUpPage from './pages/member/signUp/container/SignUpPage';
import MyPage from './pages/member/myPage/container/MyPage';
import CategoryPage from './pages/market/category/container/CategoryPage';
import ChangePasswordPage from './pages/member/changePassword/container/ChangePasswordPage';
import SellingPage from './pages/market/selling/container/SellingPage';

const SessionRouter: React.FC = () => {
  // 사용자 토큰이 없으면 로그인 페이지

  return (
    <Router>
      <Switch>
        <Route path="/login" render={(props) => <LoginPage {...props} />} />
        <Route path="/signUp" render={(props) => <SignUpPage {...props} />} />
        <Route path="/main" component={CategoryPage} exact />
        <Route path="/myPage" component={MyPage} />
        {/* <Route path="/market" component={} /> */}
        {/* <Route path="/admin" component={} /> */}
        <Route path="/changePassword" component={ChangePasswordPage} />
        <Route path="/selling" component={SellingPage} />
      </Switch>
    </Router>
  );
};

export default SessionRouter;
