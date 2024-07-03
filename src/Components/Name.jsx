import React from 'react';
import './Name.css';
import Resume from './Videos/Vivek-Verma-Resume.pdf';
import { AuthTheme } from '../AuthThemeProvider';
import { useContext } from 'react';

const Box1 = () => {
  const {theme, toggleTheme } = useContext(AuthTheme);


  return (
    <div className="box1" id='box1' style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)', marginTop:'60px', marginBottom: '-50px'  }}>
     <div className="box10"   id="home"  >
        <span style={{'--i': 1 , color : theme=='day'? null : 'white' }}><h1>i'</h1></span>
        <span style={{'--i': 2 , color : theme=='day'? null : 'white' }}><h1>m</h1></span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 11, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1 id='user-detail-name"'>V</h1></span>
        <span style={{'--i': 12, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>i</h1></span>
        <span style={{'--i': 13, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>v</h1></span>
        <span style={{'--i': 15, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>e</h1></span>
        <span style={{'--i': 16, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>k</h1></span>

        <span style={{'--i': 11}}>&nbsp;</span>
        <span style={{'--i': 11}}>&nbsp;</span>
        <span style={{'--i': 12, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>V</h1></span>
        <span style={{'--i': 13, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>e</h1></span>
        <span style={{'--i': 14, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>r</h1></span>
        <span style={{'--i': 15, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>m</h1></span>
        <span style={{'--i': 16, color: theme=='day'? 'rgb(0, 85, 169)' : 'rgb(42, 205, 216)'}}><h1>a</h1></span>
  </div>  


     
  <div className="box11" >
         <div className="box111">
 
     <h2 className="wlcm_note" style={{color : theme=='day' ? "black" : 'white', marginLeft:"20px" }}>Welcome to my portfolio!</h2>
     <h3 className="some_about" id='user-detail-intro' style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)' , color: theme=='day'? null : 'rgb(42, 205, 216)' , marginLeft:"20px" }}>I am a  enthusiastic <span style={{color: theme=='day'? 'black' : 'white'   ,  textShadow :"2px 2px grey" }}>Full Stack Web Developer</span><br/> dedicated to crafting cohesive web applications that seamlessly integrate polished front-end design with strong back-end proficiency.</h3>

      <div className="btn_div">

        <button className="rbtn"  style={{ marginLeft :"-50px", margin: "10px" ,backgroundColor :theme=='day'? null: "green"}} >
        <a download="Vivek-Verma-Resume" href={Resume}> Resume <img src='https://icon-library.com/images/download-icon-white-png/download-icon-white-png-22.jpg' style={{width :"30px"}}   id="resume-button-1"/></a>
        </button>

 <button className="rbtn" style={{backgroundColor :theme=='day'? null: "green"}}>
 
 <a  href="https://drive.google.com/file/d/1t2CNGE11gBDuO_NydRUtVc8BJWbg4LrA/view?usp=sharing" target="blank" > 
 Resume <img src='https://i.pinimg.com/originals/6a/de/d4/6aded4eedc9fdcbe8c9d8e27d82c06b3.gif' style={{width :"30px"}}  /> 
 </a>
      </button>
    
     </div>
           
        </div>
 
         <div className="box112">
         <img src="https://i.ibb.co/ph8tkQB/6865464-removebg.png" alt="side image " border="0" />
         </div>  

      </div>  

    </div>
  );
};

export default Box1;
