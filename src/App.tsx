import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from './AppRouter';
import { useSelector } from 'react-redux';
import { getState } from '@/pages/member/login/state';
import { RootState } from '@/store/store';

const App: React.FC = () => {
  // 로그인 성공했는지 관리
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const certifyYn = useSelector((state: RootState) => getState(state).certifyYn);

  useEffect(() => {
    // init이 false라면 router를 숨길 것이다.
    if (certifyYn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  }, [certifyYn]);

  return (
    <>
      {/* <Router>
        <Route path="/" component={AppRouter} />
      </Router> */}
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : '초기화'}
    </>
  );
};

export default App;
