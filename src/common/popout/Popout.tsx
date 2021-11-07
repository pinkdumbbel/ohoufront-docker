import React, { useEffect, useState } from 'react';
import './style.css';

interface PopOutProps {
  isMounted: boolean;
  style?: React.CSSProperties;
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
const Popout: React.FC<PopOutProps> = ({ children, isMounted, style }) => {
  const showUserMenu = useDelayUnmount(isMounted, 10);
  const mountedStyle: React.CSSProperties = {
    animation: 'inAnimation 100ms ease-in',
    display: 'block',
    position: 'absolute',
    zIndex: 1000,
    ...style,
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
          <div className="animated-popout header-navigation-bar-user-section-content">{children}</div>
        </div>
      )}
    </>
  );
};

export default Popout;
