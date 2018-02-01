import React from 'react';
import classes from './Project.css';
import Image from '../UI/Image/Image';

const Project = props => {
  let projectStyle = [];
  projectStyle.push(classes.project);
  if (props.alignPicRight) {
    projectStyle.push(classes.reverse);
  }

  return (
    <div className={projectStyle.join(' ')}>
      <Image image={props.image} />
      <div className={classes.spacer} />
      <div className={classes.projectDesc}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className={classes.tech}>
          <strong>Tech: </strong>
          {props.tech}
        </p>
      </div>
    </div>
  );
};

export default Project;
