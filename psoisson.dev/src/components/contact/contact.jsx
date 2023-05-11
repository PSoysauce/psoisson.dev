import React from 'react'
import "./contact.sass"
import github from '../../img/github.png'
import email from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import phone from '../../img/phone.png'
import resume from '../../img/resume.png'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1>Connect with Me</h1>
            <a href="mailto:patrick.b.soisson@gmail.com"><img src={email}></img></a>
			<a href="https://www.linkedin.com/in/patrick-soisson"><img src={linkedin}></img></a>
            <a href="https://github.com/PSoysauce"><img src={github}></img></a>
            <a href="tel:281-839-4645"><img src={phone}></img></a>
			<a href="PatrickSoissonResume.pdf"><img src={resume}></img></a>
            <a href="https://trailblazer.me/id/psoisson"><img src="img/resume.png"></img></a>

        </div>
    )
}