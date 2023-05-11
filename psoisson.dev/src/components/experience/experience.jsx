import React from 'react'
import "./experience.sass"

export default function Experience() {
  return (
      <div className="Experience" id="experience">
          <h1>Work Experience</h1>
          <div class="job">
            <h2>USAA</h2>   
            <h3>Software Engineer</h3>
            <h4>Time in Position</h4>
            <b>● Designed, developed, and tested multiple Salesforce Lightning applications to support USAA auditors.
            ● Created automated ETL solutions to move large quantities of data from different sources to our applications using
            DataStage to extract, transform, and load the data and Control-M to schedule these jobs.
            ● Migrated old Salesforce Classic apps to Lightning, and provided updates to the live Classic pages.
            ● Reviewed code, created, and assessed merge requests in GitLab. Ran CI/CD Pipelines to build, test, and deploy code.
            ● Deployed code through the different environments using Copado for Salesforce and UCD for ETL.
            ● Demoed stories to our business partners to get constant feedback to promote a healthy agile process.
            ● Created and executed unit, functional, integration, and system testing for Salesforce and ETL changes and documented
            the results in qTest.
            ● Created, reviewed, and approved change requests using ServiceNow and championed these changes.
            ● Reduced technical debt, streamlined old processes, and provided updated and new documentation.
            ● Collaborated with designers, developers, testers, and stakeholders in a SAFe Agile team.
            ● Led the Plano Nexus Team which planned, and hosted corporate events to cater to the young IT community.
            ● Mentored four interns in 2022, provided opportunities to shadow to expand their skills.
            ● Completed the data track onboarding program and learned USAA’s data technology stack.
            ● Innovated and was awarded the USAA Centennial Hackathon People’s Choice Award.
            </b>
          </div>
          <div class="job">
            <h2>USAA</h2>   
            <h3>Software Engineering Intern</h3>
            <h4>Time in Position</h4>
            <b> ● Worked on the Risk Audit IT Team utilizing the SAFe Agile methodology.
                ● Developed a Salesforce LWC application called Desk Eats.
                ● Shadowed teammates and worked with the Hadoop Framework and Salesforce LWC.
            </b>
          </div>
          <div class="job">
            <h2>Fidelity Investments</h2>   
            <h3>Software Engineering Intern</h3>
            <h4>Time in Position</h4>
            <b> Worked in a SCRUM Agile Environment with the Wealth Management Team.
                ● Designed, developed, and tested an Angular application that CSRs can use to communicate with customers through
                creating and testing email templates campaigns.
            </b>
          </div>
          
      </div>
  )
}
