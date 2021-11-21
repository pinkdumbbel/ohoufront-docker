import React, { useEffect, useState } from 'react';
import Logo from '@/components/svg/Logo';
import Cart from '@/components/svg/Cart';
import SearchIcon from '@/components/svg/SearchIcon';
import Input from '@/components/input/Input';
import './style.css';
import { Link } from 'react-router-dom';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import { Affix } from 'antd';

interface HeaderProps {
  onMounted: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMounted }) => {
  return (
    <header>
      <Affix offsetTop={0}>
        <div className="header-navigation">
          <div className="header-navigation-content">
            <div className="header-navigation-left">
              <Link to="/main">
                <Logo />
              </Link>
            </div>

            <div className="header-navigation-right">
              <div className="header-navigation-bar-search">
                <div className="header-navigation-search">
                  <div className="header-navigation-search-header">
                    <div className="header-navigation-search-box">
                      <div className="header-navigation-search-input">
                        <Input placeholder="스토어 검색" />
                        <SearchIcon className="header-navigation-search-input-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HeaderNavigation onMounted={onMounted} />
            </div>
          </div>
        </div>
      </Affix>
    </header>
  );
};

export default Header;
