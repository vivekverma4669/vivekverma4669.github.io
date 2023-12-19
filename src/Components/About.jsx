import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <h1 id="about"  className='about section' style={{textAlign:"center",  color:" rgb(0, 85, 169)",  textShadow :"2px 2px 2px black", fontSize:"50px", }}><ul>About me </ul></h1>
    <div className="box0 reveal" id="box0">
      <div >
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img className='home-img' src="https://i.ibb.co/qd3Xn3x/Whats-App-Image-2023-09-13-at-13-39-31.jpg" alt="Vivek-in-formal-shirt-black-face-black-hair-3" />
            </div>
            <div className="about-col-2">
              <p>
              I am  passionate and aspiring Full Stack Developer on a journey to transform ideas into seamless digital experiences. Although my professional journey is just beginning, my enthusiasm for creating innovative and efficient solutions knows no bounds.
              </p>
              <div className="tab-title">
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}   onClick={() => openTab('skills')}> Technical Skills</p>
                <p className={`tab-links ${activeTab === 'soft skills' ? 'active-link' : ''}`} onClick={() => openTab('soft skills')}>Soft Skills</p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
              </div>

              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul class="aboutSkill">   
                                <li><span>Frontend Development</span><br/><span class="co">HTML5 </span><span class="co">| CSS3 </span> <span class="co">| JavaScript</span> <span class="co">|React</span><span class="co">|Redux </span></li>
                                <li><span>Full Stack Development</span><br/><span class="co">HTML5 </span><span class="co">| CSS3 </span> <span class="co">| JavaScript</span> <span class="co">|React </span> <span class="co">|Mongol DB </span> <span class="co">|Node.js </span></li>
                                <li><span>Data Structure & Algorithms</span><br/><span class="co">Arrays/Strings </span><span class="co">| Stacks/Queues </span><span class="co">| Linked List </span><span class="co">| Recursion</span></li>
                            </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'soft skills' ? 'active-tab' : ''}`} id="soft skills">
              <ul class="aboutSkill">
                                <li><span>Self-learning</span><br/> <span class="co">Having the skill of self-learning can greatly benefit a developer at their workplace.</span></li>
                                {/* <li><span>Time management</span><br/><span class="co">Being time-conscious can help a developer meet deadlines and give exact estimates.</span></li> */}
                                <li><span>Problem-solving skills</span><br/><span class="co">It's about designing operating systems, maintaining software systems, or fixing bugs. </span></li>
                            </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul class="aboutSkill">
                                <li><span>Full Stack Web Development</span><span class="co"><br/>Masai School, Bengaluru<br/>dec 2022 - Dec 2023</span></li>
                                <li><span>Graduation (B.Com)</span><span class="co"><br/>Allahabad State University<br/> Jul 2020 - Aug 2023</span></li>
                            
                            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
