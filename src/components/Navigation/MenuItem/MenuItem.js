import React from 'react';
import classes from './MenuItem.css';

const MenuItem = props => {
  let itemStyles = [classes.menuItem];
  if (props.selected) {
    itemStyles.push(classes.selectedItem);
  }
  console.log(itemStyles.join(' '));
  return (
    <a href={props.link ? props.link : '#'} className={itemStyles.join(' ')}>
      {props.name}
    </a>
  );
};

export default MenuItem;
