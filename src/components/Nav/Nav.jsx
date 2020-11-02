import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import './Nav.scss';
import { Submenu } from '../Submenu';

export const Nav = ({ navItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onSetId = (id) => {
    if (currentId === id) {
      setCurrentId(null);

      return;
    }

    setCurrentId(id);
  };

  return (
    <nav className="nav header__nav">
      <button
        type="button"
        onClick={onToggleMenu}
        className="nav__label"
        htmlFor="checkbox-menu"
      >
        <span className={showMenu
          ? 'nav__icon-bar fas fa-times'
          : 'nav__icon-bar fas fa-bars'
        }
        />
      </button>

      <ul
        className={showMenu ? 'nav__list nav__list-shown' : 'nav__list'}
      >
        {navItems.map(({ id, title, subtitles, iconName }) => (
          <li
            key={id}
            className="nav__item"
          >
            <button
              type="button"
              onClick={() => onSetId(id)}
              onBlur={() => setCurrentId(null)}
              className="nav__link"
            >
              <span className={`nav__icon fas fa-${iconName}`} />
              {title}
              {!!subtitles.length && (
                <div
                  className={currentId === id
                    ? 'nav__icon fas fa-minus'
                    : 'nav__icon fas fa-plus'
                  }
                />
              )}
            </button>
            {!!subtitles.length
              && currentId === id
              && <Submenu subtitles={subtitles} />
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navItems: PropTypes.arrayOf(object).isRequired,
};
