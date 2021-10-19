import React from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import AppLayout from '@/common/applayout/AppLayout';
import './style.css';

const CategoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <AppLayout />
      <Footer />
    </>
  );
};

export default CategoryPage;
