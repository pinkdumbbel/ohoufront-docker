import React, { useEffect, useState } from 'react';
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
    if (localStorage.getItem('certifyYn')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  }, [certifyYn]);

  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : '초기화'}</>;
};

export default App;
