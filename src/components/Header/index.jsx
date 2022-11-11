import React from 'react';
import packageJson from '../../../package.json';
import NavBar from '../NavBar';

import './Header.css';

const Header = () => {
  const headerText = 'I am a header';
  const versionNumber = packageJson.version;
  const navBarItems = [
    'hello',
    versionNumber,
  ];
  return (
    <div className="header-wrapper">
      <div className="header">
        <h1>{headerText}</h1>
      </div>
      <NavBar
        items={navBarItems}
      />
    </div>
  );
};

export default Header;
