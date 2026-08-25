import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DarkMode from './DarkMode/DarkMode';
import { AuthTheme } from "../AuthThemeProvider";
import ResumeFile from "./Videos/Vivek-Verma-Resume.pdf";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const {theme} = useContext(AuthTheme);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (menuOpen) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`${hidden ? "nav-hidden" : ""} ${scrolled ? "nav-scrolled" : ""}`}
      style={{backgroundColor:  theme=='day'? "" :'#141718'}}>
     
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#home" className="nav-link home">Home</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#about" className="nav-link about">About</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#experience" className="nav-link">Experience</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#techS" className="nav-link skills">Tech Stack</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href='#projects' className="nav-link projects">Project</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#skill" className="nav-link">My Skills</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#contact" className="nav-link contact">Contact</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href={ResumeFile} target="_blank" rel="noopener noreferrer" className="nav-link resume">Resume</a></li>
      </ul>

      
      <div className="title">
      <DarkMode />
      </div>
      
    </nav>
  );
};
 export default Navbar;