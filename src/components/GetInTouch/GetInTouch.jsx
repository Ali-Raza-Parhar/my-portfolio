import React from 'react';
import './GetInTouch.css';
import MailIcon from '@material-ui/icons/Mail';

export default function GetInTouch(){
  return(
    <>
      <div className="GetInTouchWrapper" id="contact">
        <div className="GetInTouch">
          <h2>Get In Touch</h2>
          <hr className="GetInTouchHrLine" />
          <p>I'm constantly looking for new opportunities. Whether you have any exciting opportunity or just want to say hi, I'll try my best to get back to you!
          </p>
          <h1 className="mailIcon"><MailIcon fontSize='inherit'/></h1>
          <p className="email">aliraza.uostd@gmail.com</p>
        </div>
      </div>
    </>
  );
};