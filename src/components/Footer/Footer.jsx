import React from 'react';
import './Footer.css';

export default function Footer(){
  var date = new Date().getFullYear();
  return(
    <>
      <div className="footer">
        <div>
          <p>copyrights &copy; {date} by Ali Raza</p>
        </div>
      </div>
    </>
  );
};