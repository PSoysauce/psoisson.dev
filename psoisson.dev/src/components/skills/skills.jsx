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
              <span class="badge bg-secondary skillspace">Java</span>
              <span class="badge bg-secondary skillspace">SQL</span>
              <span class="badge bg-secondary skillspace">HTML</span>
              <span class="badge bg-secondary skillspace">CSS</span>
              <span class="badge bg-secondary skillspace">JavaScript</span>
              <span class="badge bg-secondary skillspace">Apex</span>
              <span class="badge bg-secondary skillspace">Python</span>
              <span class="badge bg-secondary skillspace">C++</span>
              <span class="badge bg-secondary skillspace">C</span>
              <span class="badge bg-secondary skillspace">Bash</span>
              <span class="badge bg-secondary skillspace">ksh</span>
              <span class="badge bg-secondary skillspace">R</span>
            </ul>
          </h4>
        </div>

        <div class="subskill">
          <h3>Frameworks</h3>
          <h4>
            <ul>
              <span class="badge bg-secondary skillspace">
                Lightning Web Components
              </span>
              <span class="badge bg-secondary skillspace">Angular</span>
              <span class="badge bg-secondary skillspace">React</span>
            </ul>
          </h4>
        </div>
        <div class="subskill">
          <h3>Data</h3>
          <h4>
            <ul>
              <span class="badge bg-secondary skillspace">DataStage</span>
              <span class="badge bg-secondary skillspace">Control-M</span>
              <span class="badge bg-secondary skillspace">Snowflake</span>
              <span class="badge bg-secondary skillspace">SF Data Loader</span>
              <span class="badge bg-secondary skillspace">Netezza</span>
              <span class="badge bg-secondary skillspace">Excel</span>
              <span class="badge bg-secondary skillspace">Kafka</span>
              <span class="badge bg-secondary skillspace">Tableau</span>
              <span class="badge bg-secondary skillspace">dbt</span>
            </ul>
          </h4>
        </div>
        <div class="subskill">
          <h3>Testing</h3>
          <h4>
            <ul>
              <span class="badge bg-secondary skillspace">qTest</span>
              <span class="badge bg-secondary skillspace">Unit Tests</span>
              <span class="badge bg-secondary skillspace">System Tests</span>
              <span class="badge bg-secondary skillspace">
                Functional Tests
              </span>
              <span class="badge bg-secondary skillspace">
                Integration Tests
              </span>
            </ul>
          </h4>
        </div>
        <div class="subskill">
          <h3>DevOps</h3>
          <h4>
            <ul>
              <span class="badge bg-secondary skillspace">
                UrbanCode Deploy
              </span>
              <span class="badge bg-secondary skillspace">Copado</span>
              <span class="badge bg-secondary skillspace">GitLab CI/CD</span>
              <span class="badge bg-secondary skillspace">Docker</span>
              <span class="badge bg-secondary skillspace">Openshift</span>
            </ul>
          </h4>
        </div>
        <div class="subskill">
          <h3>Certifications</h3>
          <h4>
            <ul>
              <span class="badge bg-secondary skillspace">
                Salesforce Certified Administrator
              </span>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
}
