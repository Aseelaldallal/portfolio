import React from 'react';
import classes from './Button.css';

const Button = props => {
  const openLink = () => {
    window.open(props.link);
  };

  return (
    <button onClick={openLink} className={classes.button}>
      {props.label}
    </button>
  );
};

export default Button;
