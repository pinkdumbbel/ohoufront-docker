import React from 'react';
import { Link } from 'react-router-dom';
import Popout from '../popout/Popout';
import './style.css';

interface UserMenuProps {
  isMounted: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ isMounted }) => {
  const style: React.CSSProperties = {
    top: '60px',
    right: '187.5px',
  };

  const userMenus = [
    ['마이페이지', 'myPage'],
    ['비밀번호설정', 'changePassword'],
    ['로그아웃', 'logout'],
  ];

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
      </ul>
    </Popout>
  );
};

export default UserMenu;
