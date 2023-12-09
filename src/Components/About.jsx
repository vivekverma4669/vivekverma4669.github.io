import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <h1  style={{textAlign:"center",  color:" rgb(0, 85, 169)",  textShadow :"2px 2px 2px black", fontSize:"50px", }}><ul>About me </ul></h1>
    <div className="box0 reveal" id="box0">
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="https://i.ibb.co/wRn0MSB/Vivek-in-formal-shirt-black-face-black-hair-3.jpg" alt="Vivek-in-formal-shirt-black-face-black-hair-3" />
            </div>
            <div className="about-col-2">
              <p>
                Java Backend Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked intensively through 1200+ hours of Bootcamp Structure learning of Java, SpringBoot, Hibernate, AWS, JavaScript, HTML5 & CSS3.
              </p>
              <div className="tab-title">
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}   onClick={() => openTab('skills')}> Technical Skills</p>
                <p className={`tab-links ${activeTab === 'soft skills' ? 'active-link' : ''}`} onClick={() => openTab('soft skills')}>Soft Skills</p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                
              </div>
              <div className={`tab-contents ${activeTab === 'soft skills' ? 'active-tab' : ''}`} id="soft skills">
             
             <h3><ul>
              <li> bht skills hai beta  </li>
              <li>riding </li>
              <li> coding </li>
              <li> coding </li>
              <li> coding </li>
            
              </ul>
              </h3> 
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                {/* ... Content for Education */}
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
