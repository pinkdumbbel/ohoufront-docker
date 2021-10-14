import React from 'react';
import { Input } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './style.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-navigation">
        <div className="header-navigation-content">
          <div className="header-navigation-left">오늘의집</div>
          <div className="header-navigation-right">
            <div className="header-navigation-bar-search">
              <div className="header-navigation-search">
                <div className="header-navigation-search-header">
                  <div className="header-navigation-serch-box">
                    <div className="header-navigation-serch-input">
                      <Input size="large" placeholder="스토어 검색" prefix={<SearchOutlined />} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="header-navigation-icon">
              <ShoppingCartOutlined className="icon" style={{ fontSize: '24px' }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
