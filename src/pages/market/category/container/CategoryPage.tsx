import React from 'react';
import AppLayout from '@/common/applayout/AppLayout';
import { Layout } from 'antd';
import './style.css';

const CategoryPage: React.FC = () => {
  const { Sider, Content } = Layout;

  return (
    <AppLayout>
      <div className="feed-container">
        <div className="feed-wrap">
          <div className="feed-row">
            <Sider width={300} className="feed-sidebar"></Sider>
            <Content className="feed-content"></Content>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
