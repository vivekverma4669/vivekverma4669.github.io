import React from 'react';
import './Name.css';

const Box1 = () => {
  return (
    <div className="box1" id="box1">
      <div className="box10">
        <span style={{'--i': 1}}><h1>i'</h1></span>
        <span style={{'--i': 2}}><h1>m</h1></span>
        {/* Uncomment the lines below if needed */}
        {/* <span style={{'--i': 3}}>&nbsp;</span>
        <span style={{'--i': 4}}><h1>T</h1></span>
        <span style={{'--i': 5}}><h1>h</h1></span>
        <span style={{'--i': 6}}><h1>e</h1></span>
        <span style={{'--i': 7}}><h1>r</h1></span>
        <span style={{'--i': 8}}><h1>e</h1></span> */}
        {/* <span style={{'--i': 3}}><h1>!</h1></span> */}
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
          <h2 className="some_about">I am a passionate <span style={{color: 'black'  ,  textShadow :"2px 2px grey"}}>Full Stack Web Developer </span> who creates seamless web applications, combining front-end finesse with robust back-end expertise </h2>

          <div className="btn_div">
            <button className="rbtn"  style={{ marginLeft :"-50px", margin: "20px"}} >
              <a download="" href=''> Resume <img src='https://icon-library.com/images/download-icon-white-png/download-icon-white-png-22.jpg' style={{width :"30px"}}/></a>
            </button>

            <button className="rbtn">
              <a download="" href="pdf/DINESH_KUMAR_Resume.pdf">Resume <img src='https://i.pinimg.com/originals/6a/de/d4/6aded4eedc9fdcbe8c9d8e27d82c06b3.gif' style={{width :"30px"}} /> </a>
            </button>
           
          </div>
          
        </div>

        <div className="box112">
       <img src="https://i.ibb.co/Hx10nWk/6865464-removebg-preview.png" alt="6865464-removebg-preview" border="0" />
        </div>
      </div>

    </div>
  );
};

export default Box1;
