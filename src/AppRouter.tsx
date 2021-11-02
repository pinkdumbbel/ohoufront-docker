import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductRouter from './ProductRouter';
import SessionRouter from './SessionRouter';

// 세션불필요한 일반고객 대상 페이지 모음
const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/" component={SessionRouter} />
      </Router>
    </>
  );
};

export default AppRouter;
