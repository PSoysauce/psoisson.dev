import React from 'react'
import "./skills.sass"

export default function Skills() {
  return (
      <div className="Skills" id="skills">
          <h1>Skills</h1>

          <div>
            <h3>Programming</h3>
            <h4>Java, SQL, HTML, CSS, JS, Apex, Python, C++, C, Bash, ksh, R</h4>
          </div>
          <div>
            <h3>Frameworks</h3>
            <h4>Lightning Web Components, Angular, React</h4>
          </div>
          <div>
            <h3>Data</h3>
            <h4>DataStage, Control-M, Snowflake, SF Data Loader, Netezza, dbt, Excel, Kafka, Tableau</h4>
          </div>
          <div>
            <h3>Testing</h3>
            <h4>qTest, Apex Unit Tests</h4>
          </div>
          <div>
            <h3>DevOps</h3>
            <h4>UrbanCode Deploy, Copado, Gitlab CI/CD, Docker, Openshift</h4>
          </div>

      </div>
  )
}
