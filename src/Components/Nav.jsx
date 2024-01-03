import './nav.css';
import { AuthTheme } from '../AuthThemeProvider';
import React, { useContext } from "react";
// import logo from './ Images/logo1.png'

const NavBar = () => {
  const { toggleTheme } = useContext(AuthTheme);
  function changeTheme() {
    toggleTheme();
    alert("Theme toggled (currentlly working )");
  }


    // if theme is night  to aplly black color to top nav
  return (
    <section className="top-nav"  id="nav-menu"> 
   {/* 
      <div>
       <img src="https://i.ibb.co/q9MB4fF/logo1.png" alt="logo1" border="0" style={{width:"90px"}} />
      </div> */}

      <input id="menu-toggle" type="checkbox" />

      <label className='menu-button-container' htmlFor="menu-toggle">
      <div className='menu-button'></div>
      </label>


        <ul className="menu">
        <li className="tdn"><a href="#home" className="nav-link home">Home</a></li>
        <li className="tdn"><a href="#about" className="nav-link about">About</a></li>
        <li className="tdn"><a href="#techS" className="nav-link skills">Tech Stack</a></li>
        <li className="tdn"><a href='#projects' className="nav-link projects">Project</a></li>
        <li className="tdn"><a href="#skill" className="nav-link">My Skills</a></li>
        <li className="tdn"><a href="#contact" className="nav-link contact">Contact</a></li>
        <li className="tdn"><a href="#home" className="nav-link resume">Resume</a></li>
        </ul>
        
 <div style={{}}>
     <img onClick={changeTheme} src="https://www.svgrepo.com/show/285294/moon-night.svg" style={{width:"50px",  marginRight:"30px", backgroundColor:"" } } />

     </div> 
    </section>
  );
};


export default NavBar;