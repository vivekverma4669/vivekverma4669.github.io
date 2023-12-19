import React from 'react';
import './Name.css';
import Resume from './Videos/VivekVerma-FullStackWebDeveloper-H3Oc.pdf';

const Box1 = () => {
  return (
    <div className="box1" id='box1'>

      <div className="box10"   id="home" >
        <span style={{'--i': 1}}><h1>i'</h1></span>
        <span style={{'--i': 2}}><h1>m</h1></span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 10}}>&nbsp;</span>
        <span style={{'--i': 11, color: 'rgb(0, 85, 169)'}}><h1>V</h1></span>
        <span style={{'--i': 12, color: 'rgb(0, 85, 169)'}}><h1>i</h1></span>
        <span style={{'--i': 13, color: 'rgb(0, 85, 169)'}}><h1>v</h1></span>
        <span style={{'--i': 15, color: 'rgb(0, 85, 169)'}}><h1>e</h1></span>
        <span style={{'--i': 16, color: 'rgb(0, 85, 169)'}}><h1>k</h1></span>

        <span style={{'--i': 11}}>&nbsp;</span>
        <span style={{'--i': 11}}>&nbsp;</span>
        <span style={{'--i': 12, color: 'rgb(0, 85, 169)'}}><h1>V</h1></span>
        <span style={{'--i': 13, color: 'rgb(0, 85, 169)'}}><h1>e</h1></span>
        <span style={{'--i': 14, color: 'rgb(0, 85, 169)'}}><h1>r</h1></span>
        <span style={{'--i': 15, color: 'rgb(0, 85, 169)'}}><h1>m</h1></span>
        <span style={{'--i': 16, color: 'rgb(0, 85, 169)'}}><h1>a</h1></span>
      </div>

      <div className="box11">
        <div className="box111">

   <h2 className="wlcm_note" style={{color:"black"}}>Welcome to my portfolio!</h2>
   <h2 className="some_about" id='user-detail-intro'>I am a  enthusiastic <span style={{color: 'black'  ,  textShadow :"2px 2px grey"}}>Full Stack Web Developer </span> dedicated to crafting cohesive web applications that seamlessly integrate polished front-end design with strong back-end proficiency.</h2>

      <div className="btn_div">

        <button className="rbtn"  style={{ marginLeft :"-50px", margin: "20px"}} >
        <a download="VivekVerma-Resume.pdf" href={Resume}> Resume <img src='https://icon-library.com/images/download-icon-white-png/download-icon-white-png-22.jpg' style={{width :"30px"}}/></a>
        </button>

      <button className="rbtn">
        <a  href={Resume} >Resume <img src='https://i.pinimg.com/originals/6a/de/d4/6aded4eedc9fdcbe8c9d8e27d82c06b3.gif' style={{width :"30px"}} /> </a>
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
