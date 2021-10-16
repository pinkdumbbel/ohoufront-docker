import React from 'react';
import { Layout } from 'antd';
import Header from '@/common/Header';
import Footer from '@/common/Footer';
import AppLayout from '@/common/AppLayout';
//import AppLayout from '../../../../common/AppLayout';
import './style.css';

const CategoryPage: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <AppLayout />
      <Footer />
    </Layout>
  );
};

export default CategoryPage;
