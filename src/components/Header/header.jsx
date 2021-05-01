import React, {useState} from 'react';
import './header.css';
import {Link} from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(){
  const [toggler, setToggler] = useState(false);
  const displayMenu = useState({
    display : 'none'
  });
    return(
    <>
      <div className="header">
        <div className="logo">Ali raza</div>
        <div className="navWrapper">
          <ul className="headerNavigation">
            <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
            <li><Link to="stack" smooth={true} duration={400}>Stack</Link></li>
            <li><Link to="contact" smooth={true} duration={300}>Contact</Link></li>
          </ul>
          <div className="IconButton" onClick={() => setToggler(!toggler)}>
            <MenuIcon fontSize="inherit" />
          </div>
          <ul className="fullWidthHeaderNavigation" style= {{display: toggler ? displayMenu.display= 'block' : displayMenu.display= 'none'}}>
            <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
            <li><Link to="stack" smooth={true} duration={400}>Stack</Link></li>
            <li><Link to="contact" smooth={true} duration={300}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
    );
}