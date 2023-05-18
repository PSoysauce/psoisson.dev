import React from "react";
import "./skills.sass";

export default function Skills() {
  return (
    <div className="Skills" id="skills">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </head>
      <h2 class="title">Skills</h2>
      <div class="skillset">
        <div class="subskill">
          <h3>Programming</h3>
          <h4>
            <ul>
              <li>Java</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Apex</li>
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
              <li>Bash</li>
              <li>ksh</li>
              <li>R</li>
            </ul>
            
          </h4>
        </div>

        <div class="subskill">
          <h3>Frameworks</h3>
          <ul>
            <li>Lightning Web Components</li>
            <li>Angular</li>
            <li>React</li>
          </ul>
        </div>
        <div class="subskill">
          <h3>Data</h3>
          <h4>
            <ul>
              <li>DataStage</li>
              <li>Control-M</li>
              <li>Snowflake</li>
              <li>SF Data Loader</li>
              <li>Netezza</li>
              <li>dbt</li>
              <li>Excel</li>
              <li>Kafka</li>
              <li>Tableau</li>
            </ul>
          </h4>
        </div>
        <div class="subskill">
          <h3>Testing</h3>
          <h4>
            <ul>
              <li>qTest</li>
              <li>Apex Unit Tests</li>
            </ul>
          </h4>
        </div>
        <div class="subskill"> 
          <h3>DevOps</h3>
          <h4>
            <ul>
              <li>UrbanCode Deploy</li>
              <li>Copado</li>
              <li>GitLab CI/CD</li>
              <li>Docker</li>
              <li>Openshift</li>
            </ul> 
          </h4>
        </div>
        <div class="subskill">
          <h3>Certifications</h3>
          <h4>
            <ul>
              <li>Salesforce Certified Administrator</li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
}
