import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/member/login/container/LoginPage';
import MyPage from './pages/member/myPage/container/MyPage';
import layout from './pages/layout';
import App from './App';

const SessionRouter = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/market" component={App} />
        <Route path="/admin" component={App} />
        <Route path="/main" component={layout} />
      </Switch>
    </Router>
  );
};

export default SessionRouter;
