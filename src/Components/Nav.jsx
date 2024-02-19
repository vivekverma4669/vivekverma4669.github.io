import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DarkMode from './DarkMode/DarkMode';
import { AuthTheme } from "../AuthThemeProvider";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme} = useContext(AuthTheme);

   
  return ( 
    <nav  style={{backgroundColor:  theme=='day'? "" :'#141718'}}>
     
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#home" className="nav-link home">Home</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#about" className="nav-link about">About</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#techS" className="nav-link skills">Tech Stack</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href='#projects' className="nav-link projects">Project</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#skill" className="nav-link">My Skills</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#contact" className="nav-link contact">Contact</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#home" className="nav-link resume">Resume</a></li>
      </ul>

      
      <div className="title">
      <DarkMode />
      </div>
      
    </nav>
  );
};
 export default Navbar;