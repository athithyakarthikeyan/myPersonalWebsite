import React from 'react'
import Card from './Card.jsx'
import Image from './assets/Wordle_Logo.svg.png'
import Password from './assets/password-icon-protection-illustration-sign-security-symbol-or-logo-vector-removebg-preview.png' 
import Bank from './assets/bank-icon-logo-design-vector-removebg-preview.png'
import Harvard from "./assets/Screenshot 2024-05-30 141908.png"
import Amazon from "./assets/Screenshot 2024-05-30 141741.png"
import Pfp from "./assets/Arthur_Morgan_-_Red_Dead_Redemption_2.png"
import './index.css'
import downloadFile from './DownloadFile.js'
import Linkedin from "./assets/png-clipart-linkedin-linkedin-thumbnail-removebg-preview.png"
import Github from "./assets/GitHub-Mark-ea2971cee799-removebg-preview.png"
function Body() {
  return (
    <div className="main-body">
      <div className="about-me">
        <div className="about-content">
          <img className="pfp" src={Pfp}></img>
          <p className="intro-text"><strong>Hey there! I'm Athithya, a second year computer science student with a passion of creating stunnning websites!</strong></p>
        </div>
      </div>
      <div id="project" className="project-section">
        <h1 className="project-title">Projects</h1>
      </div>
      <div className="project-cards">
        <Card image = {Image} style={{ width: '100px', marginTop: '50px' , marginBottom:'50px' }} lang = "PYTHON" name= "Wordle" description = "Wordle Game consisting of 300 words and simple GUI" link = "https://github.com/athithyakarthikeyan/passwordGenerator" />
        <Card image = {Password} style={{ width: '200px' }} lang = "PYTHON" name= "Password Generator" description = "Password Generator with variable length and saving options" link="https://github.com/athithyakarthikeyan/passwordGenerator"/>
        <Card image = {Bank} style={{ width: '200px' }} lang = "C++" name= "Bank Account" description = "Bank account simulator using OOPs consisting of useful functions" link="https://github.com/athithyakarthikeyan/bankSystem"/>
      </div>
      <div className="certificate-section">
        <h1 className="certificate-title">Certifications</h1>
        <div className="certificates">
           <img src={Amazon} style={{ width: '500px' }}></img>
           <img src={Harvard} style={{ width: '700px' }}></img>
        </div>
      </div>
      <div id="contact" className="contact-section">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-content">
            <div className="resume">
             <h1>Resume</h1>
             <p>A copy of my resume with all my qualifications and details</p>
             <button onclick={downloadFile()} className="download-button">Download</button>
             <h1>Socials</h1>
             <div className="socials">
              <a href="https://www.linkedin.com/in/athithya-karthikeyan-558226258/"><img className="social-image" src={Linkedin}></img></a>
              <a href='https://github.com/athithyakarthikeyan'><img className="social-image" src={Github}></img></a>
             </div>
            </div>
            <div className="mail-section">
              <h1>Mail me!</h1>
            <form className = "form"action="mailto:athithyakarthikeyan@gmail.com" method="post" enctype="text/plain">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Message: </label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button className="send-button" type="submit">Send</button>
              </form>
              </div>
        </div>


      </div>
    </div>
  )
}

export default Body
