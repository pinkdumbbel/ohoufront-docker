import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  // 로그인 성공했는지 관리
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // init이 false라면 router를 숨길 것이다.
    setInit(true);
  }, []);

  return (
    <>
      <Router>
        <Route path="/" component={AppRouter} />
      </Router>
    </>
  );
};

export default App;
