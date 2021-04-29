import React from 'react';
import './Stack.css';
import JsIcon from '../../assets/img/javascript.jpg';
import ReactIcon from '../../assets/img/react.png';
import Html5Icon from '../../assets/img/html5.png';
import Css3Icon from '../../assets/img/css3.png';
import HerokuIcon from '../../assets/img/heroku.png';

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
              <p className="stackImgCaption">Rect</p>
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
              <img className="stackImg" src={HerokuIcon} alt="herokuicon" />
              <p className="stackImgCaption">Heroku</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={JsIcon} alt="jsicon" />
              <p className="stackImgCaption">JavaScript</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={ReactIcon} alt="reacticon" />
              <p className="stackImgCaption">JavaScript</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Html5Icon} alt="html5icon" />
              <p className="stackImgCaption">JavaScript</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Css3Icon} alt="cssicon" />
              <p className="stackImgCaption">JavaScript</p>
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={HerokuIcon} alt="herokuicon" />
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={JsIcon} alt="jsicon" />
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={ReactIcon} alt="reacticon" />
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Html5Icon} alt="html5icon" />
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={Css3Icon} alt="cssicon" />
            </div>
            <div className="stackImgColumn">
              <img className="stackImg" src={HerokuIcon} alt="herokuicon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};