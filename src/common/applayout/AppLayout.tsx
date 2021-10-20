import React from 'react';
import { Layout } from 'antd';
import './style.css';

const AppLayout: React.FC = () => {
  const { Sider, Content } = Layout;
  return (
    <div className="feed-container">
      <div className="feed-wrap">
        <div className="feed-row">
          <Sider width={300} className="feed-sidebar"></Sider>
          <Content className="feed-content"></Content>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
