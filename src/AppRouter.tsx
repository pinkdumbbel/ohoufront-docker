import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import SignUpPage from './pages/member/signUp/container/SignUpPage';
import MyPage from './pages/member/myPage/container/MyPage';
import CategoryPage from './pages/market/category/container/CategoryPage';
import ChangePasswordPage from './pages/member/changePassword/container/ChangePasswordPage';
import SellingPage from './pages/market/selling/container/SellingPage';
import OrderPage from './pages/market/order/container/OrderPage';
import UserManagePage from './pages/admin/userManage/container/UserManagePage';
import NotFoundPage from './pages/common/notFound/container/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CategoryPage} exact />
        <Route path="/main" component={CategoryPage} exact />
        <Route path="/myPage" component={MyPage} exact />
        <Route path="/userManage" component={UserManagePage} exact />
        <Route path="/changePassword" component={ChangePasswordPage} exact />
        <Route path="/selling" component={SellingPage} exact />
        <Route path="/order" component={OrderPage} exact />
        <Route path="/login" render={(props) => <LoginPage {...props} />} exact />
        <Route path="/signUp" render={(props) => <SignUpPage {...props} />} exact />
        <Route path="*" component={NotFoundPage} exact />
      </Switch>
    </Router>
  );
};

export default AppRouter;
