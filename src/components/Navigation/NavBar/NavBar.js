import React from 'react';
import classes from './NavBar.css';
import MenuItem from '../MenuItem/MenuItem';


const NavBar = () => {


    function clicked() {
        
    }

    return (
        <div className={classes.NavBar}>
            <div className={classes.MenuItemList}>
                <MenuItem name="Home" selected />
                <MenuItem name="Skills" />
                <MenuItem name="Projects" />
                <MenuItem name="Resume" />
                <MenuItem name="Contact" />
            </div>
        </div>
    );

}

export default NavBar;