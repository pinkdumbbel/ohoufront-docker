import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import SignUpPage from './pages/member/signUp/container/SignUpPage';
import MyPage from './pages/member/myPage/container/MyPage';
import CategoryPage from './pages/market/category/container/CategoryPage';
import ChangePasswordPage from './pages/member/changePassword/container/ChangePasswordPage';
import SellingPage from './pages/market/selling/container/SellingPage';

interface AppRouterProps {
  isLoggedIn: boolean;
}

const AppRouter: React.FC<AppRouterProps> = ({ isLoggedIn }) => {
  isLoggedIn = true;

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/main" component={CategoryPage} exact />
            <Route path="/myPage" component={MyPage} exact />
            {/* <Route path="/market" component={} exact/> */}
            {/* <Route path="/admin" component={} exact/> */}
            <Route path="/changePassword" component={ChangePasswordPage} exact />
            <Route path="/selling" component={SellingPage} exact />
            {/* <Redirect from="*" to="/main" /> */}
          </>
        ) : (
          <>
            <Route path="/" render={(props) => <LoginPage {...props} />} exact />
            <Route path="/signUp" render={(props) => <SignUpPage {...props} />} exact />
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
