import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Logo from '../svg/Logo';
import './style.css';
import Caret from '../svg/Caret';
import Cart from '../svg/Cart';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-navigation">
        <div className="header-navigation-content">
          <div className="header-navigation-left">
            <a className="layout-navigation-logo layout-navigation__bar__logo" aria-label="오늘의집" href="/">
              <Logo />
            </a>
          </div>

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

            <a href="{() => false}" className="header-navigation-icon">
              <Cart />
            </a>

            <div className="header-navigation-user-drop-down">
              <button className="header-navigation-user-button" type="button">
                <div className="header-navigation-user-button-img">
                  <img
                    className="image"
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=72&h=72&c=c"
                    alt=""
                  />
                </div>
                <Caret />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
