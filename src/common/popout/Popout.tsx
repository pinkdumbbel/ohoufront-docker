import React, { useEffect, useState } from 'react';
import './style.css';

interface PopOutProps {
  isMounted: boolean;
}

function useDelayUnmount(isMounted: boolean, delay: number): boolean {
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout>;

    if (isMounted && !showUserMenu) setShowUserMenu(true);
    else if (!isMounted && showUserMenu) timeOutId = setTimeout(() => setShowUserMenu(false), delay);

    return () => clearTimeout(timeOutId);
  }, [isMounted, showUserMenu, delay]);

  return showUserMenu;
}
const Popout: React.FC<PopOutProps> = ({ isMounted }) => {
  const showUserMenu = useDelayUnmount(isMounted, 10);
  const mountedStyle: React.CSSProperties = {
    animation: 'inAnimation 100ms ease-in',
    display: 'block',
    position: 'absolute',
    zIndex: 1000,
    top: '70px',
    right: '187.5px',
  };
  const unmountedStyle: React.CSSProperties = {
    animation: 'outAnimation 100ms ease-out',
    animationFillMode: 'forwards',
    display: 'none',
  };
  return (
    <>
      {showUserMenu && (
        <div className="popout" style={isMounted ? mountedStyle : unmountedStyle}>
          <div className="animated-popout header-navigation-bar-user-section-content">
            <ul className="header-navigation-bar-user-menu">
              {['마이페이지', '비밀번호설정', '로그아웃'].map((menu, i) => (
                <li key={i}>
                  <a className="header-navigation-bar-user-menu-item" href="#!">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Popout;
