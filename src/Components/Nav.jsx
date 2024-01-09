import './nav.css';
import DarkMode from './DarkMode/DarkMode'
import { useContext } from 'react';
import { AuthTheme } from '../AuthThemeProvider';

const NavBar = () => {
  const {theme}=useContext(AuthTheme);
  return (
    <section className="top-nav">

     

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
      <div className="menu-button"></div>


      </label>

      <ul className="menu">
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#home" className="nav-link home">Home</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#about" className="nav-link about">About</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#techS" className="nav-link skills">Tech Stack</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href='#projects' className="nav-link projects">Project</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#skill" className="nav-link">My Skills</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#contact" className="nav-link contact">Contact</a></li>
        <li className="tdn"><a style={{color : theme=='day'? null :'white'}} href="#home" className="nav-link resume">Resume</a></li>
        </ul>
        


      <div   style={{ marginRight:"60px" } }>
        <DarkMode/>
     </div>

    </section>
  );
};

export default NavBar;