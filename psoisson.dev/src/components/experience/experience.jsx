import React from "react";
import "./experience.sass";

export default function Experience() {
  return (
    <div className="Experience" id="experience">
      <h1>Work Experience</h1>
      <div class="job">
        <h2>USAA - Software Engineer</h2>
        <h6>June 2021 - Current</h6>
        <pre>
          <ul>
          <li>
            Designed, developed, and tested multiple Salesforce Lightning
            applications to support USAA auditors.
          </li>
          <li>
            Created automated ETL solutions to move large quantities of data
            from different sources to our applications using DataStage to
            extract, transform, and load the data and Control-M to schedule
            these jobs.
          </li>
          <li>
            Migrated old Salesforce Classic apps to Lightning, and provided
            updates to the live Classic pages.
          </li>
          <li>
            Reviewed code, created, and assessed merge requests in GitLab. Ran
            CI/CD Pipelines to build, test, and deploy code.
          </li>
          <li>
            Deployed code through the different environments using Copado for
            Salesforce and UCD for ETL.
          </li>
          <li>
            Demoed stories to our business partners to get constant feedback to
            promote a healthy agile process.
          </li>
          <li>
            Created and executed unit, functional, integration, and system
            testing for Salesforce and ETL changes and documented the results in
            qTest.
          </li>
          <li>
            Created, reviewed, and approved change requests using ServiceNow and
            championed these changes.
          </li>
          <li>
            Reduced technical debt, streamlined old processes, and provided
            updated and new documentation.
          </li>
          <li>
            Collaborated with designers, developers, testers, and stakeholders
            in a SAFe Agile team.
          </li>
          <li>
            Led the Plano Nexus Team which planned, and hosted corporate events
            to cater to the young IT community.
          </li>
          <li>
            Mentored four interns in 2022, provided opportunities to shadow to
            expand their skills.
          </li>
          <li>
            Completed the data track onboarding program and learned USAA’s data
            technology stack.
          </li>
          <li>
            Innovated and was awarded the USAA Centennial Hackathon People’s
            Choice Award. 
          </li>
          </ul>
          
        </pre>
      </div>
      <div class="job">
        <h2>USAA - Software Engineering Intern</h2>
        <h6>May 2020 - July 2020</h6>
        <ul>
          
          <li>
          Worked on the Risk Audit IT Team utilizing the SAFe Agile
          methodology.
          </li>
          <li>
          Developed a Salesforce LWC application called Desk
          Eats.
          </li>
          <li>
          Shadowed teammates and worked with the Hadoop Framework and
          Salesforce LWC.
          </li>
        </ul>
      </div>
      <div class="job">
        <h2>Fidelity Investments - Software Engineering Intern</h2>
        <h6>May 2019 - Aug 2019</h6>
        <ul>
          <li>
          Worked in a SCRUM Agile Environment with the Wealth Management Team.
          </li>
          <li>
          Designed, developed, and tested an Angular application that CSRs can
          use to communicate with customers through creating and testing email
          templates campaigns.
          </li>
        </ul>
      </div>
    </div>
  );
}
