import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SellingPage from './pages/market/selling/container/SellingPage';

const ProductRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SellingPage} />
      </Switch>
    </Router>
  );
};

export default ProductRouter;
