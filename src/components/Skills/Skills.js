

import React from 'react';
import classes from './Skills.css';


const Skills = () => {

    return (
        <section className={classes.skills}>
            <h2> My Skills </h2>
            <h3> My main skill is my <span className={classes.emph}>aptitude for learning</span> </h3>
            <div className={classes.skillList} >
                <div>
                    <p className={classes.title}> Languages </p>
                    <p className={classes.text}> JavaScript, Java, C++, HTML, CSS </p>
                    <p className={classes.title}> Languages </p>
                    <p className={classes.text}> JavaScript, Java, C++, HTML, CSS </p>
                </div>
                <div>
                    <p className={classes.title}> Title </p>
                    <p className={classes.text}> Text </p>
                </div>
            </div>
        </section>
    );

}



export default Skills;