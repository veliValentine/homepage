import React from 'react';
import PropTypes from 'prop-types';

import './NavBar.css';

const NavBar = ({
  items = [],
}) => {
  const listItem = items.map((item) => (
    <NavBarItem
      key={`navbar-item-${item}`}
      item={item}
    />
  ));
  return (
    <ul className="navbar">
      {listItem}
    </ul>
  );
};

const NavBarItem = ({ item }) => (
  <li className="navbar-item">{item}</li>
);

NavBarItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.number,
    PropTypes.string,
  ),
};

NavBar.defaultProps = {
  items: [],
};

export default NavBar;
