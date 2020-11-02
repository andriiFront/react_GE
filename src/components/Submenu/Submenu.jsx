import React from 'react';
import PropTypes from 'prop-types';
import './Submenu.scss';

export const Submenu = ({ subtitles }) => (
  <ul className="nav__submenu">
    {subtitles.map(item => (
      <li
        key={item}
        className="nav__item-submenu"
      >
        <button
          type="button"
          className="nav__link-submenu"
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
);

Submenu.propTypes = {
  subtitles: PropTypes.arrayOf(PropTypes.string),
};

Submenu.defaultProps = {
  subtitles: [],
};
