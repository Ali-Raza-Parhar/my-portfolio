import React from 'react';
import './Projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Project(props){
  const technologies = props.technologies;
  const technologiesUsed = technologies.map((tech) =>    <li>{tech}</li>  );
  return(
    <>
      <div className="projectDetail">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <br />
          <div className="projectTechnologies">
            <div>
              <ul>
                {technologiesUsed}
              </ul>
            </div>
            <div>
              <nav>
                <span><a href={props.githubLink} target="_blank"><GitHubIcon/></a></span>
                <span><a href={props.liveLink} target="_blank"><LaunchIcon/></a></span>
              </nav>
            </div>
          </div>
        </div>      
    </>
  );
}