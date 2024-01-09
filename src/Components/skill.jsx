import React, { useContext, useEffect, useState } from 'react';
import './skil.css';
import './project.css';
import GitHubCalendar from 'react-github-calendar'; 
import { ActivityCalendar } from 'activity-calendar-react';
import axios from 'axios';
import { AuthTheme } from '../AuthThemeProvider';

const SkillsSection = () => {
  const [githubData, setGithubData] = useState([]);
  const {theme} =useContext(AuthTheme);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await axios.get(
          'https://YOUR-GITHUB-USERNAME/stats/contributions'
        );
        setGithubData(response.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div id='skill'  style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'}} >
    <div className="box4 reveal" id="box4">
  <div className="container" >
    <div className="box41">
      <h1 style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)" : '#32de84' ,  textShadow :"2px 2px 2px black", fontSize:"50px", }}>My Skills</h1>
    </div>
    <div className="skills-list">

      <div className='skills-card'> 
       <img className="skills-card-img" src='' alt=''></img>
        <h2 className="skills-card-name">Full Stack Development</h2>
        <p>A Full Stack Developer plays a pivotal role in the world of web development, possessing a comprehensive skill set that spans both the front-end and back-end aspects of software creation. They are adept at crafting seamless user experiences while also delving into the intricacies of server-side programming and database management.</p>
      </div>

      <div className='skills-card'>
      <img className="skills-card-img" src='' alt=''></img>
        <h2  className="skills-card-name">Frontend Development</h2>
        <p>Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages using HTML5 / CSS & JavaScript.</p>
      </div>

      <div className='skills-card'>
      <img className="skills-card-img" src='' alt=''></img>
        <h2  className="skills-card-name">Data Structure & Algorithms</h2>
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
<div className="github_stat" style={{ margin: "auto", width:"90%", gap:"15px", marginBottom: "20px" ,display:"flex", flexWrap:"wrap" , justifyContent:"space-around" , }}>

    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=vivekverma4669&show_icons=true&locale=en&layout=compact&theme=dracula" alt="GitHub Streak Stats" />
    <img   src="https://github-readme-stats.vercel.app/api/top-langs?username=vivekverma4669&show_icons=true&locale=en&layout=compact&theme=dracula" alt=""/>
    {/* <img  id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivekverma4669&layout=compact" alt="Top Languages" /> */}
  
    <img  id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=vivekverma4669&show_icons=true&locale=en&layout=compact&theme=dracula" alt="GitHub Stats Card" />
</div>



              <div className="react-activity-calendar" style={{width:"70%" , margin :"auto"}}>

{/* <img src="https://media.giphy.com/media/W5eoZHPpUx9sapR0eu/giphy.gif" width="30px" alt="Git"/>&nbsp;<i><b>🐱My Contributions:</b></i>  */}

<h2 style={{color : theme=='day'? null : "white" , textAlign: 'center'}}> My Contributions </h2>
<p align="center">
<img style={{width :'100%'}} src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=vivekverma4669&theme=dracula" />
</p>


{/* <img src='https://github-readme-activity-graph.vercel.app/graph?username=vivekverma4669&bg_color=000000&color=4fff67&line=4fff67&point=ffffff&area=true&hide_border=true' /> */}

<h2 className="skills-card-name" style={{color : theme=='day'? null : "white" , textAlign: 'center'}}>GitHub Activity Calendar</h2>
                <GitHubCalendar username="vivekverma4669" style={{width:"100%" , margin :"auto" , backgroundColor:"silver" , padding: '10px'}} />
              </div>
  
</div>

  );
};

export default SkillsSection;
