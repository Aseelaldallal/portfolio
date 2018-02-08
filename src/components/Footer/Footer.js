import React from 'react';
import classes from './Footer.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      Unecessarily made with React. For Fun. By Me. &copy;{' '}
      {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
