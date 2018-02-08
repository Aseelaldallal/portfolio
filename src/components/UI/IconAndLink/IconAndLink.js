import React from 'react';
import classes from './IconAndLink.css';

const IconAndLink = props => {
  console.log('pooo', props);
  return (
    <div className={classes.iconAndLink}>
      <a href={props.link}>
        <i className={props.icon} />
        {props.text}
      </a>
    </div>
  );
};

export default IconAndLink;
