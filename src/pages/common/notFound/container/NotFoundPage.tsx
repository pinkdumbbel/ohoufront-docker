import React from 'react';
import { Result, Button } from 'antd';
import './style.css';
import { NavLink } from 'react-router-dom';
import OhousLogin from '@/components/svg/OhousLogin';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div id="navigation">
        <OhousLogin />
      </div>
      <div id="background">
        <div className="background-content">
          <Result
            status="warning"
            title="요청하신 페이지를 찾을 수 없습니다."
            extra={
              <Button type="primary" key="console">
                <NavLink to="/main">메인으로</NavLink>
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
