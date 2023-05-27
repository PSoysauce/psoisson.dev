import React from "react";
import "./contact.sass";
import github from "../../img/github.png";
import email from "../../img/email.png";
import linkedin from "../../img/linkedin.png";
import phone from "../../img/phone.png";
import resume from "../../img/resume.png";

export default function Contact() {
  return (
    <footer class="footer">
      <div class="footer-text-left">
        <p>
          <a class="menu" href="#intro">
            Intro
          </a>
          <a class="menu" href="#experience">
            Experience
          </a>
          <a class="menu" href="#portfolio">
            Projects
          </a>
          <a class="menu" href="#skills">
            Skills
          </a>
          <a
            class="menu"
            href="https://drive.google.com/file/d/1PvwUoyCxIIKO3jD-8DUpjbf-gwSdoloe/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
        </p>
        <p>Patrick Soisson &copy; 2023</p>
      </div>

      <div class="footer-content-right">
        <a class="icon-style" href="mailto:patrick.b.soisson@gmail.com">
          <img src={email}></img>
        </a>
        <a
          class="icon-style"
          href="https://www.linkedin.com/in/patrick-soisson"
        >
          <img src={linkedin}></img>
        </a>
        <a class="icon-style" href="https://github.com/PSoysauce">
          <img src={github}></img>
        </a>
        <a class="icon-style" href="tel:281-839-4645">
          <img src={phone}></img>
        </a>
      </div>
    </footer>
  );
}
