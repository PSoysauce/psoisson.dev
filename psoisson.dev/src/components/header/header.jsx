import React from "react";
import "./header.sass";

export default function Header() {
  return (
    <div className="header">
       <div className="logo" href="#intro">psoisson.dev</div>
      <nav>
        
        <ul class="navLinks">
       
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
          <a href="https://drive.google.com/file/d/1mHm1N7liZAVf6GicI4bkpNhyHExpU3gY/view?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
