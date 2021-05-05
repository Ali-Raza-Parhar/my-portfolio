import React from 'react';
import './Projects.css';
import Project from './Project';

export default function Projects(){
  return(
    <>
      <div className="projectWrapper" id="projects">
        <div className="projectHeading">
          <h2>Projects</h2>
          <hr className="projectHrLine"/>
          <p>Some of my featured projects, see more on my <a href="#">Github</a>.</p>
          <Project />
        </div>
      </div>
    </>
  );
};