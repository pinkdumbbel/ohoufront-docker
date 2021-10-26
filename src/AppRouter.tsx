import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductRouter from './ProductRouter';
import SessionRouter from './SessionRouter';

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/" component={SessionRouter} />
        {/* <Route path="/productions" component={ProductRouter} /> */}
      </Router>
    </>
  );
};

export default AppRouter;
