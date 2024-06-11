import React, { useRef } from 'react';
import Card from './Card.jsx';
import Image from './assets/Wordle_Logo.svg.png';
import Password from './assets/password-icon-protection-illustration-sign-security-symbol-or-logo-vector-removebg-preview.png';
import Bank from './assets/bank-icon-logo-design-vector-removebg-preview.png';
import HTML from "./assets/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png";
import Reactjs from "./assets/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail-removebg-preview.png";
import Javascript from "./assets/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail-removebg-preview.png";
import CSS from "./assets/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail-removebg-preview.png";
import Pfp from "./assets/Arthur_Morgan_-_Red_Dead_Redemption_2.png";
import './index.css';
import downloadFile from './DownloadFile.js';
import Linkedin from "./assets/png-clipart-linkedin-linkedin-thumbnail-removebg-preview.png";
import Github from "./assets/GitHub-Mark-ea2971cee799-removebg-preview.png";
import Weather from "./assets/images.png";
import Skills from './Skills.jsx';
import { motion, useInView } from 'framer-motion';

function Body() {
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const projectTitleRef = useRef(null);
  const downloadRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  const projectInView = useInView(projectRef, { once: true });
  const projectTitleInView = useInView(projectTitleRef, {once : true});
  const downloadInView = useInView(downloadRef,{once : true});
  return (
    <div className="main-body">
      <div className="about-me">
        <div className="about-content">
          <img className="pfp" src={Pfp} alt="Profile Picture" />
          <p className="intro-text"><strong>Hey there! I'm Athithya, a second-year computer science student with a passion for creating stunning websites!</strong></p>
        </div>
      </div>
      <div id="project" className="project-section">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          ref={projectTitleRef}
          animate={projectTitleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="project-title">Projects</h1>
        </motion.div>
        
      </div>
        <motion.div
          className="project-cards"
          initial={{ opacity: 0, y: 50 }}
          ref={projectRef}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
        <Card image={Image} style={{ width: '100px', marginTop: '50px', marginBottom: '50px' }} lang="PYTHON" name="Wordle" description="Wordle Game consisting of 300 words and simple GUI" link="https://github.com/athithyakarthikeyan/passwordGenerator" />
        <Card image={Password} style={{ width: '200px' }} lang="PYTHON" name="Password Generator" description="Password Generator with variable length and saving options" link="https://github.com/athithyakarthikeyan/passwordGenerator" />
        <Card image={Weather} style={{ width: '200px' }} lang="JAVASCRIPT" name="Weather App" description="Weather app that uses React.js and OpenWeatherAPI" link="https://github.com/athithyakarthikeyan/weatherApp" />
        <Card image={Bank} style={{ width: '200px' }} lang="C++" name="Bank Account" description="Bank account simulator using OOPs consisting of useful functions" link="https://github.com/athithyakarthikeyan/bankSystem" />
        </motion.div>
      <div className="certificate-section">
        <motion.div
          className="profile-button"
          initial={{ opacity: 0, x: -100 }}
          ref={skillsRef}
          animate={skillsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="certificate-title">Skills</h1>
        </motion.div>
        <div className="certificates">
          <Skills skillName={"HTML"} skillLogo={HTML} style={{ width: "150px" }} skillPercent={"90"} />
          <Skills skillName={"CSS"} skillLogo={CSS} style={{ width: "130px" }} skillPercent={"80"} />
          <Skills skillName={"JavaScript"} skillLogo={Javascript} style={{ width: "130px" }} skillPercent={"60"} />
          <Skills skillName={"React.js"} skillLogo={Reactjs} style={{ width: "130px" }} skillPercent={"80"} />
        </div>
      </div>
      <div id="contact" className="contact-section">
        <motion.div
          className="contact-title"
          initial={{ opacity: 0, x: -100 }}
          ref={contactRef}
          animate={contactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1>Contact</h1>
        </motion.div>
        <div className="contact-content">
          <div className="resume">
            <h1>Resume</h1>
            <p>A copy of my resume with all my qualifications and details.</p>
            <motion.div
              initial={{ opacity: 0}}
              ref={downloadRef}
              animate={downloadInView ? { opacity: 1} : {}}
              transition={{ duration: 1 }}
            >
             <button className="download-button" onClick={downloadFile} >Download</button>
            </motion.div>
            <div className="social-section">
              <h1>Socials</h1>
              <div className="socials">
                <a href="https://www.linkedin.com/in/athithya-karthikeyan-558226258/"><img className="social-image" src={Linkedin} alt="LinkedIn" /></a>
                <a href='https://github.com/athithyakarthikeyan'><img className="social-image" src={Github} alt="GitHub" /></a>
              </div>
            </div>
          </div>
          <div className="mail-section">
            <h1>Mail me!</h1>
            <form className="form" action="mailto:athithyakarthikeyan@gmail.com" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="send-button" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
