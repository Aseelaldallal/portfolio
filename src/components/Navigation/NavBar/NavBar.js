import React from 'react';
import classes from './NavBar.css';
import MenuItem from '../MenuItem/MenuItem';

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.MenuItemList}>
        <MenuItem name="Home" selected link="#home" />
        <MenuItem name="Skills" link="#skills" />
        <MenuItem name="Projects" link="#projects" />
        <MenuItem name="Contact" link="#contact" />
      </div>
    </div>
  );
};

export default NavBar;
