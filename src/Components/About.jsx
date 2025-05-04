import React, { useContext, useState } from 'react';
import './about.css';
import { AuthTheme } from '../AuthThemeProvider';
import vivek from '../images/vivek.jpg'

const About = () => {
  const { theme } = useContext(AuthTheme);
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div style={{ backgroundColor: theme == 'day' ? null : 'rgb(16, 22,34)', marginTop: '0px' }}>
      <h1 id="about" className='about section' style={{ textAlign: "center", color: theme == 'day' ? "rgb(0, 85, 169)" : '#32de84', textShadow: "2px 2px 2px black", fontSize: "50px", }}><ul>About me </ul></h1>
      <div className="box0 reveal" id="box0" >
        <div >
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img className='home-img' src={vivek} alt="Vivek" loading='lazy' />
              </div>
              <div className="about-col-2">
                <p id="user-detail-intro" style={{ color: theme == 'day' ? null : "white" }}>
                  I am  passionate and aspiring Full Stack Developer on a journey to transform ideas into seamless digital experiences. Although my professional journey is just beginning, my enthusiasm for creating innovative and efficient solutions knows no bounds.
                </p>
                <div className="tab-title" style={{ color: theme == 'day' ? null : "rgb(42, 205, 216)" }}>
                  <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} style={{ color: theme == 'day' ? 'black' : null }} onClick={() => openTab('skills')}> Technical Skills</p>
                  <p className={`tab-links ${activeTab === 'soft skills' ? 'active-link' : ''}`} style={{ color: theme == 'day' ? 'black' : null }} onClick={() => openTab('soft skills')}>Soft Skills</p>
                  <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} style={{ color: theme == 'day' ? 'black' : null }} onClick={() => openTab('education')}>Education</p>
                </div>

                <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                  <ul class="aboutSkill">
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Frontend Development</span><br /><p style={{ color: theme == 'day' ? "black" : "white" }}><span >HTML5 </span><span >| CSS3 </span> <span >| JavaScript</span> <br></br><span >|React</span><span >|Redux </span> </p></li>
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Full Stack Development</span><br /><p style={{ color: theme == 'day' ? "black" : "white" }}><span >HTML5 </span><span >| CSS3 </span> <span >| JavaScript</span> <span >|React </span><br></br><span >|Redux </span> <span >|Mongol DB </span> <span >|Node.js </span></p></li>
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Data Structure & Algorithms</span><br /><p style={{ color: theme == 'day' ? "black" : "white" }}><span >Arrays/Strings </span><span >| Stacks/Queues </span><span >| Linked List </span><span >| DP </span> <span >| Back tracking  </span>  <span >| Tree  | binary tree  </span></p></li>
                  </ul>
                </div>

                <div className={`tab-contents ${activeTab === 'soft skills' ? 'active-tab' : ''}`} id="soft skills">
                  <ul class="aboutSkill">
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }} >Self-learning</span><br /> <p style={{ color: theme == 'day' ? "black" : "white" }}><span >Having the skill of self-learning can greatly benefit a developer at their workplace.</span></p></li>
                    {/* <li><span>Time management</span><br/><span >Being time-conscious can help a developer meet deadlines and give exact estimates.</span></li> */}
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Problem-solving skills</span><br />  <p style={{ color: theme == 'day' ? "black" : "white" }}><span >It's about designing operating systems, maintaining software systems, or fixing bugs. </span> </p></li>
                  </ul>
                </div>
                <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                  <ul class="aboutSkill">
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Full Stack Web Development</span>  <p style={{ color: theme == 'day' ? "black" : "white" }}> <span ><br />Masai School, Bengaluru<br />dec 2022 - Dec 2023</span></p></li>
                    <li><span style={{ color: theme == 'day' ? null : "#32de84" }}>Graduation (B.Com)</span>  <p style={{ color: theme == 'day' ? "black" : "white" }}> <span ><br />Allahabad State University<br /> Jul 2020 - Aug 2023</span></p></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
