import React, { useState } from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import AppLayout from '@/common/applayout/AppLayout';
import Popout from '@/common/popout/Popout';
import './style.css';
import useUserMenu from '@/hooks/useUserMenu';

const CategoryPage: React.FC = () => {
  const [userMenu, setUserMenu] = useState(false);

  const onUserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <Header onUserMenu={onUserMenu} />
      <AppLayout />
      <Footer />
      {userMenu && <Popout userMenu={userMenu} />}
    </>
  );
};

export default CategoryPage;
