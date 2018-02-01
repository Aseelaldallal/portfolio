import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import classes from './Skill.css';

const Skill = props => {
  return (
    <Auxillary>
      <p className={classes.title}> {props.title} </p>
      <p className={classes.text}> {props.text} </p>
    </Auxillary>
  );
};

export default Skill;
