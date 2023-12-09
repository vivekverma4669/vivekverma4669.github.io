import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="secText">
        <h2>What I Am Great At</h2>
        <p>
          I excel in full-stack web development, proficiently coding with HTML, CSS, JavaScript, React, Node.js, MongoDB,
          Java and BootStrap. My strengths include crafting user-friendly interfaces and robust back-end solutions,
          creating seamless web experiences.
        </p>
      </div>
      <div className="content">
        <div className="servicesBx">
          <img src="img/computer.png" alt="computer" />
          <h3>Web Designing</h3>
        </div>
        <div className="servicesBx">
          <img src="img/responsive.png" alt="computer" />
          <h3>Responsive Websites</h3>
        </div>
        <div className="servicesBx">
          <img src="img/coding.png" alt="computer" />
          <h3>Web Development</h3>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
