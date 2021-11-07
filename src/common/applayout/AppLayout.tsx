import React, { useState } from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import UserMenu from '../userMenu/UserMenu';

const AppLayout: React.FC = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  const onMounted = () => setIsMounted(!isMounted);

  return (
    <>
      <Header onMounted={onMounted} />
      {children}
      <Footer />
      <UserMenu isMounted={isMounted} />
    </>
  );
};

export default AppLayout;
