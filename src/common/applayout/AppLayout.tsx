import React, { useState } from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import Popout from '@/common/popout/Popout';

const AppLayout: React.FC = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  const onMounted = () => setIsMounted(!isMounted);

  return (
    <>
      <Header onMounted={onMounted} />
      {children}
      <Footer />
      <Popout isMounted={isMounted} />
    </>
  );
};

export default AppLayout;
