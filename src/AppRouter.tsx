import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SessionRouter from './SessionRouter';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={SessionRouter} />
    </Router>
  );
};

export default AppRouter;
