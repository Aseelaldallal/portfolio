import React from 'react';
import classes from './Skills.css';
import Skill from './Skill/Skill';

const Skills = () => {
  return (
    <section className={classes.skills}>
      <h2> My Skills </h2>
      <h3>
        {' '}
        My main skill is my{' '}
        <span className={classes.emph}>aptitude for learning</span>{' '}
      </h3>
      <div className={classes.skillList}>
        <div>
          <Skill
            title="Frameworks and Libraries"
            text="React, React Native, Redux, Express, JQuery, Bootstrap"
          />
          <Skill title="Platforms" text="Firebase, Meteor" />
          <Skill title="Environments" text="Node.js" />
          <Skill title="Version Control" text="Git" />
        </div>
        <div>
          <Skill title="Languages" text="JavaScript, Java, C++, HTML, CSS" />
          <Skill title="Databases" text="MongoDB, PostgreSQL" />
          <Skill title="Query Languages" text="NoSQL, SQL" />
          <Skill title="Design Languages" text="Material UI" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
