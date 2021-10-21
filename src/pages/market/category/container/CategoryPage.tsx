import React, { useState } from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import AppLayout from '@/common/applayout/AppLayout';
import Popout from '@/common/popout/Popout';
import './style.css';

const CategoryPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const onMounted = () => setIsMounted(!isMounted);

  return (
    <>
      <Header onMounted={onMounted} />
      <AppLayout />
      <Footer />
      <Popout isMounted={isMounted} />
    </>
  );
};

export default CategoryPage;
