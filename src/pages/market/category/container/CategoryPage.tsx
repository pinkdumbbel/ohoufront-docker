import React from 'react';
import { Layout } from 'antd';
import Header from '../../../../common/Header';
import Footer from '../../../../common/Footer';
import './style.css';
import AppLayout from '../../../../common/AppLayout';

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
