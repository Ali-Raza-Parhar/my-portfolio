import React from 'react';
import './Projects.css';
import Project from './Project';

export default function Projects(){
  let burgerBuilderDesc = "Burger Builder is an e-commerce application that I have built for myself as a practice work. I'm still working on this project. The main features includes breaking the whole project into components, styling different components, using Firebase as a database, multipage feeling in a single page app(routing), forms and form validation and adding redux to our app for state management. Using axios to make requests for sending and receiving data from database."
  let toDoDesc = "To Do app is an application built with robust technology like React. The purpose to build this app was to explore the React components in detail. The use of modern styling library i.e; Material UI has fanned fire in the design of this app. The app covers the core concepts of React js. I built this project for fun and to enhance my programming skills.";
  let socialCouncelarDesc = "Social Councelar is an application which I have built for my company. This application is also built with React. This is basically a dashboard. Not only I have developed it but I have also designed it by myself. It took my too much efforts but it returned me a lot of confidense and experience to develop a big application."
  let pigGameDesc = "Pig Game is a game in which two players can play it at a time. The players can set the winning score at the start of the game. Each time a player rolls the dice, it generates random numbers. Once a player reaches the winning score the game automatically stops and shows the winning player status. The game can be restarted with the restart button. I have also set few other game rules. I have build this game to improve my abilities to solve the real-time problems.";
  return(
    <>
      <div className="projectWrapper" id="projects">
        <div className="projectHeading">
          <h2>Projects</h2>
          <hr className="projectHrLine"/>
          <p>Some of my featured projects, see more on my <a href="https://github.com/Ali-Raza-Parhar">Github</a>.</p>
          <Project title="Burger Builder" description={burgerBuilderDesc} technologies={['ReactJs', 'Bootstrap', 'Jsx', 'ES6']} githubLink="https://github.com/Ali-Raza-Parhar/Burger-builder-project" liveLink="https://ali-raza-parhar.github.io/Burger-builder-project/"/>
          <Project title="To Do App" description={toDoDesc} technologies={['ReactJs', 'ES6', 'Material UI', 'Jsx']} githubLink="https://github.com/Ali-Raza-Parhar/To-Do-App" liveLink="https://ali-raza-parhar.github.io/To-Do-App/"/>
          <Project title="Social Councelar Dashboard" description={socialCouncelarDesc} technologies={['ReactJs', 'Material UI', 'Jsx', 'ES6']} githubLink="https://github.com/Ali-Raza-Parhar/sc-Dashboard" liveLink="https://ali-raza-parhar.github.io/sc-Dashboard"/>
          <Project title="Pig Game" description={pigGameDesc} technologies={['JavaScript', 'HTML5', 'CSS3', 'Bootstrap']} githubLink="https://github.com/Ali-Raza-Parhar/Pig-Game" liveLink="https://ali-raza-parhar.github.io/Pig-Game/"/>
        </div>
      </div>
    </>
  );
};