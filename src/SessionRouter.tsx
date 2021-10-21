import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import SignUpPage from './pages/member/signUp/container/SignUpPage';
import MyPage from './pages/member/myPage/container/MyPage';
import App from './App';
import CategoryPage from './pages/market/category/container/CategoryPage';

const SessionRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/market" component={App} />
        <Route path="/admin" component={App} />
        <Route path="/" component={CategoryPage} />
      </Switch>
    </Router>
  );
};

export default SessionRouter;
