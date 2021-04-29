import React from 'react';
import './heroSection.css';
import authorImg from '../../assets/img/ali.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function HeroSection(){
  return(
    <>
      <div className="heroSectionWrapper">
        <div className="heroImgSection">
          <img src={authorImg} id="home" alt="author image" />
          <h2>Ali Raza</h2>
          <span className="heroJobTitle">Front End Developer</span>
          <ul className="heroLinks">
            <li><a href="#"><GitHubIcon style={{ fontSize: 32 }}/></a></li>
            <li><a href="#"><TwitterIcon style={{ fontSize: 32 }}/></a></li>
            <li><a href="#"><LinkedInIcon style={{ fontSize: 32 }}/></a></li>
          </ul>
        </div>
        <div className="heroIntro">
          <p><span className="heroIntroGreeting">Hi there!👋</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am a passionate software engineer and a thinker who builds creative and original digital products. I possess an exceptional work ethic and excellent problem-solving skills. I have a deep knowledge of accessible and responsive digital products.</p>
        </div>
      </div>
    </>    
  );
};

