import React from 'react'
import "./contact.sass"

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1>Connect with Me</h1>
            <a href="mailto:patrick.b.soisson@gmail.com"><img src="img/email.png"></img></a>
			<a href="https://www.linkedin.com/in/patrick-soisson"><img src="img/lin.png"></img></a>
            <a href="https://github.com/PSoysauce"><img src="img/github.png"></img></a>
            <a href="tel:281-839-4645"><img src="img/phone.png"></img></a>
			<a href="PatrickSoissonResume.pdf"><img src="img/resume.png"></img></a>
        </div>
    )
}