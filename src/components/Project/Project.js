import React from 'react';
import classes from './Project.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Button from '../UI/Button/Button';
import Image from '../UI/Image/Image';

const Project = props => {
  let projectStyle = [];
  projectStyle.push(classes.project);
  if (props.alignPicRight) {
    projectStyle.push(classes.reverse);
  }

  return (
    <div className={classes.projectContainer}>
      <div className={projectStyle.join(' ')}>
        <div className={classes.imgContainer}>
          <Image image={props.image} />
        </div>
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
      <div className={classes.buttonContainer}>
        <Button label="visit" link={props.visitLink} />

        <Button label="github" link={props.gitLink} />
      </div>
    </div>
  );
};

export default Project;
