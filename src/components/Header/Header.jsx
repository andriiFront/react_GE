import React from 'react';
import PropTypes, { object } from 'prop-types';
import './Header.scss';
import { Nav } from '../Nav';
import { Logo } from '../Logo';

export const Header = ({ navItems }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        <Nav navItems={navItems} />
        <button
          type="button"
          className="header__login"
        >
          LOG IN
        </button>
        <button
          type="button"
          className="header__signup"
        >
          SIGN UP
        </button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  navItems: PropTypes.arrayOf(object).isRequired,
};
