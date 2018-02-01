import React from 'react';
import classes from './MenuItem.css';

const MenuItem = props => {

    let itemStyles = [classes.menuItem];
    if (props.selected) {
        itemStyles.push(classes.selectedItem);
    }
    console.log(itemStyles.join(' '));
    return (
        <a href="#" className={itemStyles.join(' ')}>
            {props.name}
        </a>
    );
}

export default MenuItem;