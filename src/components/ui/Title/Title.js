import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import classes from './Title.css';
const Title = props => {
  return (
    <Auxillary>
      <h2> {props.title}</h2>
      <h3>{props.subheading}</h3>
    </Auxillary>
  );
};

export default Title;
