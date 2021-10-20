import React from 'react';
import './style.css';
const Popout: React.FC<{ userMenu: boolean }> = ({ userMenu }) => {
  /* const style: React.CSSProperties = !userMenu
    ? { display: 'none' }
    : {
        display: 'block',
        position: 'absolute',
        zIndex: 1000,
        top: '70px',
        right: '187.5px',
      }; */

  //animated-popout header-navigation-bar-user-section-content
  return (
    <div>
      <div className="popout" /* style={style} */>
        <div className={[userMenu && 'animated-popout', 'header-navigation-bar-user-section-content'].join(' ')}>
          <ul className="header-navigation-bar-user-menu"></ul>
        </div>
      </div>
    </div>
  );
};

export default Popout;
