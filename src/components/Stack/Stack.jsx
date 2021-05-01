import React from 'react';
import './Stack.css';
import JsIcon from '../../assets/img/javascript.jpg';
import ReactIcon from '../../assets/img/react.png';
import Html5Icon from '../../assets/img/html5.png';
import Css3Icon from '../../assets/img/css3.png';
import HerokuIcon from '../../assets/img/heroku.png';
import CentOSIcon from '../../assets/img/centos.jpg';
import GitIcon from '../../assets/img/git.png';
import AmazonS3Icon from '../../assets/img/amazonS3.png';
import ES6Icon from '../../assets/img/es6.jpg';

export default function Stack(){
  return(
    <>
      <div className="stackWrapper" id="stack">
        <div className="stackTitle">
          <h2>Stack</h2>
          <hr className="stackHrLine"/>
          <p>I have experience with many modern tools, I select them for my projects depending on the usage.</p>
        </div>
        <div className="stackImages">
          <div className="stackImagesBox">
            <div className="stackImgColumn">
              <img className="stackImg" src={JsIcon} alt="jsicon" />
              <p className="stackImgCaption">JavaScript</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={ReactIcon} alt="reacticon" />
              <p className="stackImgCaption">React</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Html5Icon} alt="html5icon" />
              <p className="stackImgCaption">HTML5</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Css3Icon} alt="cssicon" />
              <p className="stackImgCaption">CSS3</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={GitIcon} alt="giticon" />
              <p className="stackImgCaption">Git</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={AmazonS3Icon} alt="amazonS3icon" />
              <p className="stackImgCaption">AmazonS3</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={ES6Icon} alt="ES6icon" />
              <p className="stackImgCaption">ES6</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={CentOSIcon} alt="centOSicon" />
              <p className="stackImgCaption">CentOS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};