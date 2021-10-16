import React from 'react';
import Logo from '../svg/Logo';
import './style.css';
import Caret from '../svg/Caret';
import Cart from '../svg/Cart';
import SearchIcon from '../svg/SearchIcon';

const Header: React.FC = () => {
  const nav = 'header-navigation';

  return (
    <header>
      <div className={nav}>
        <div className={`${nav}-content`}>
          <div className={`${nav}-left`}>
            <a className={`${nav}-logo`} aria-label="오늘의집" href="/">
              <Logo />
            </a>
          </div>

          <div className={`${nav}-right`}>
            <div className={`${nav}-bar-search`}>
              <div className={`${nav}-search`}>
                <div className={`${nav}-search-header`}>
                  <div className={`${nav}-search-box`}>
                    <div className={`${nav}-search-input`}>
                      <input className={`${nav}-search-input-text`} autoComplete="off" />
                      <SearchIcon className={`${nav}-search-input-icon`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="{() => false}" className={`${nav}-icon`}>
              <Cart />
            </a>

            <div className={`${nav}-user-drop-down`}>
              <button className={`${nav}-user-button`} type="button">
                <div className={`${nav}-user-button-img`}>
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
