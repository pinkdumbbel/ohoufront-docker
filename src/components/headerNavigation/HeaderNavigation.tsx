import { getState } from '@/pages/member/login/state';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Caret from '@/components/svg/Caret';
import './style.css';
import { getStorageItem } from '@/utils/func';

interface HeaderNavigationProps {
  onMounted: () => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ onMounted }) => {
  const certifyYn = getStorageItem('certifyYn');

  return (
    <>
      {certifyYn ? (
        <div className="header-navigation-drop-down">
          <button className="header-navigation-user-button" type="button" onClick={onMounted}>
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
      ) : (
        <div className="header-navigation-bar-login">
          <Link to="/login" className="header-navigation-bar-login-item">
            로그인
          </Link>
          <Link to="/signUp" className="header-navigation-bar-login-item">
            회원가입
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
