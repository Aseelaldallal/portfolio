// React
import React from 'react';
// Components
import Title from '../UI/Title/Title';
import Project from '../Project/Project';
// Style
import classes from './CurrentProject.css';

const CurrentProject = () => {
  return (
    <section className={classes.currentProject}>
      <Title
        title="Current Project"
        subheading="Working on 2 versions of this app: One using MongoDB and another with PostgreSQL"
      />
      <Project
        title="Boomtown"
        description="Full Stack web app that supports a local sharing economy by allowing registered users to post items that they'd like to lend to others, and borrow items from fellow users."
        tech="Node, Express, MongoDB, PostgreSQL React, Redux, Amazon AWS"
        image="burger"
        gitLink="https://github.com/Aseelaldallal/boomtown"
      />
    </section>
  );
};

export default CurrentProject;
