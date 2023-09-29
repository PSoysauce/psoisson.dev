import React from 'react'
import "./intro.sass"
import profilepic from '../../img/DSC09008.JPG'
import github from '../../img/github.png'
import email from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import phone from '../../img/phone.png'
import pin from '../../img/pin.png'
import resume from '../../img/resume.png'
import sflogo from '../../img/sflogo.png'

export default function Intro() {
    return (
            <div className="Intro" id="intro">
            <div className="left">
                <img src={profilepic} className="Profile" alt="Profile"></img>
            </div>
            <div className="right">
                <div className="text">
                    <h1>Patrick Soisson</h1>
                    <div className="pin">
                        <h4><img src={pin}></img><i>San Antonio, TX</i></h4>
                    </div>                    
                    <h3>Patrick graduated from The University of Texas at Dallas in May 2021 with a Bachelor's degree in Computer Science. He has 2.5 years of Software Engineering Experience.
                        He is passionate about automation, documentation, learning new technologies, modernization, and being purposefully inclusive.</h3>
                    <div className="icons">
                        <a href="tel:281-839-4645"><img src={phone}></img></a>
                        <a href="mailto:patrick.b.soisson@gmail.com"><img src={email}></img></a>
                        <a href="https://github.com/PSoysauce"><img src={github}></img></a>
                        <a href="https://www.linkedin.com/in/patrick-soisson"><img src={linkedin}></img></a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        
    )
}