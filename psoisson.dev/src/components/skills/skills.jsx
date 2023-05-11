import React from 'react'
import "./skills.sass"

export default function Skills() {
  return (
      <div className="Skills" id="skills">
          <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          </head>
          <h1>Skills</h1>

          <div class="skillgroup">
            <h3>Programming</h3>

            <h4>
              <div class="card">Java</div>
              <div class="card">SQL</div>
              <div class="card">HTML</div>
              <div class="subskill">CSS</div>
              <div class="subskill">JavaScript</div>
              <div class="subskill">Apex</div>
              <div class="subskill">Python</div>
              <div class="subskill">C++</div>
              <div class="subskill">C</div>
              <div class="subskill">Bash</div>
              <div class="subskill">ksh</div>
              <div class="subskill">R</div>

            </h4>
          </div>
          <div class="skillgroup">
            <h3>Frameworks</h3>
            <h4>
              <div class="subskill">Lightning Web Components</div>
              <div class="subskill">Angular</div>
              <div class="subskill">React</div>
            </h4>
            
          </div>
          <div class="skillgroup">
            <h3>Data</h3>
            <h4>
              <div class="subskill">DataStage</div>
              <div class="subskill">Control-M</div>
              <div class="subskill">Snowflake</div>
              <div class="subskill">SF Data Loader</div>
              <div class="subskill">Netezza</div>
              <div class="subskill">dbt</div>
              <div class="subskill">Excel</div>
              <div class="subskill">Kafka</div>
              <div class="subskill">Tableau</div>
            </h4>
          </div>
          <div class="skillgroup">
            <h3>Testing</h3>
            <h4>
              <div class="subskill">qTest</div>
              <div class="subskill">Apex Unit Tests</div>
            </h4>
          </div>
          <div class="skillgroup">
            <h3>DevOps</h3>
            <h4>
              <div class="subskill">UrbanCode Deploy</div>
              <div class="subskill">Copado</div>
              <div class="subskill">GitLab CI/CD</div>
              <div class="subskill">Docker</div>
              <div class="subskill">Openshift</div>
            </h4>
          </div>
          <div class="skillgroup">
            <h3>Certifications</h3>
            <h4>
              <div class="subskill">Salesforce Certified Administrator</div>
            </h4>
          </div>

      </div>
  )
}
