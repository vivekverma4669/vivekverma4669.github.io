import React from 'react';
import './skil.css';
import './project.css';

const SkillsSection = () => {
  return (
    <div className="box4 reveal" id="box4">
  <div className="container" id='skills'>
    <div className="box41">
      <h1 style={{ textAlign: "center", color: "rgb(0, 85, 169)", textShadow: "2px 2px 2px black", fontSize: "50px", borderRadius:"12px" }}>My Skills</h1>
    </div>
    <div className="skills-list">

      <div>
       <img src=''></img>
        <h2>Full Stack Development</h2>
        <p>A Full Stack Developer plays a pivotal role in the world of web development, possessing a comprehensive skill set that spans both the front-end and back-end aspects of software creation. They are adept at crafting seamless user experiences while also delving into the intricacies of server-side programming and database management.</p>
      </div>

      <div>
      <img></img>
        <h2>Frontend Development</h2>
        <p>Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages using HTML5 / CSS & JavaScript.</p>
      </div>

      <div>
      <img></img>
        <h2>Data Structure & Algorithms</h2>
        <p>A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.</p>
      </div>

      {/* <div>
        <i className="fa-solid fa-face-smile"></i>
        <h2>Communication Effectiveness</h2>
        <p>Effective communication is the process of exchanging ideas, thoughts, opinions, knowledge, and data so that the message is received and understood with clarity and purpose. When we communicate effectively, both the sender and receiver feel satisfied.</p>
      </div> */}
    </div>
  </div>
</div>

  );
};

export default SkillsSection;
