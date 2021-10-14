import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import MyPage from './pages/member/myPage/container/MyPage';
import App from './App';

const SessionRouter = (): JSX.Element => {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/myPage" component={MyPage} />
      <Route path="/market" component={App} />
      <Route path="/admin" component={App} />
    </Router>
  );
};

export default SessionRouter;
