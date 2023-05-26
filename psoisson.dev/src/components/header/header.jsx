import React from "react";
import "./header.sass";

export default function Header() {
  return (
    <div className="header">
       
      <nav>
        <ul class="navLinks">
          <div class="left">
            <li>
              <a class="logo" href="#intro">psoisson.dev</a>
            </li>
          </div>
          <div class="right">
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            
            <li>
            <a href="https://drive.google.com/file/d/1PvwUoyCxIIKO3jD-8DUpjbf-gwSdoloe/view?usp=share_link" target="_blank">Resume</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
