import React from 'react';
import { Link } from 'react-router-dom';
import Popout from '../popout/Popout';
import './style.css';
import { actions as loginActions } from '@/pages/member/login/state';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

interface UserMenuProps {
  isMounted: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ isMounted }) => {
  const dispatch = useDispatch<AppDispatch>();

  const style: React.CSSProperties = {
    top: '60px',
    right: '187.5px',
  };

  const userMenus = [
    ['마이페이지', 'myPage'],
    ['비밀번호설정', 'changePassword'],
    // ['로그아웃', 'logout'],
  ];

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('certifyYn', '');
    dispatch(loginActions.logout());
  };

  return (
    <Popout isMounted={isMounted} style={style}>
      <ul className="header-navigation-bar-user-menu">
        {userMenus.map((menu, i) => (
          <li key={i}>
            <Link to={`/${menu[1]}`} className="header-navigation-bar-user-menu-item">
              {menu[0]}
            </Link>
          </li>
        ))}
        <li key={2}>
          <div className="header-navigation-bar-user-menu-item" onClick={logout}>
            로그아웃
          </div>
        </li>
      </ul>
    </Popout>
  );
};

export default UserMenu;
