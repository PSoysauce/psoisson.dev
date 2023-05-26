import React from "react";
import "./portfolio.sass";
import link from "../../img/link.png";
import trophy from "../../img/trophy.png";

export default function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <div class="title">
        <h1 class="titletext">Projects</h1>
      </div>
      <div class="projects">
        <div class="gallery">
        {/* <a href="https://github.com/PSoysauce/TI-Innovator-Hub-Data-Acquisition-Tool"> */}
          <div class="desc">Texas Instruments - TI Innovator Hub Data Acquisition-Tool</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/TI-Innovator-Hub-Data-Acquisition-Tool">
              <img
                src={link}
                alt="TexasInstruments"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">C++</span>
            <span class="badge bg-secondary skillspace">HTML</span>
            <span class="badge bg-secondary skillspace">CSS</span>
            <span class="badge bg-secondary skillspace">JavaScript</span>
          </div>
          <div class="moreinfo">
          Built an instrumentation tool for portable signal measurements using the classroom ready TI-Innovator
          </div>
          
        </div>
        <div class="gallery">
          <div class="desc">Nasa - Orion Capsule Heat Shield Spectrometer</div>
          <div class="right">
            <a href="https://docs.google.com/presentation/d/1Mw_838Zlai4wDD4g0TZJvgwKiFayK2Nu/edit?usp=sharing&ouid=111700840446315981460&rtpof=true&sd=true">
              <img src={link} alt="Nasa" width="10" height="10"></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Matlab</span>
            <span class="badge bg-secondary skillspace">Voltmeter</span>
            <span class="badge bg-secondary skillspace">Power Supply</span>
            <span class="badge bg-secondary skillspace">Excel</span>
          </div>
          <div class="moreinfo">
          Performed environmental testing and characterization on the Orion Spacecraft Heat Shield Spectrometer
          </div>
        </div>

        <div class="gallery">
          <div class="desc">USAA Centennial Hackathon - Memecoin Rewards 
          <img src={trophy} alt="trophy" width="10" height="10"></img>
          </div>
          <div class="right">
            <a href="https://drive.google.com/file/d/1xTnXzsC7syhfAQEa_4UF8R9D0v8Q0WRd/view?usp=share_link">
              <img src={link} alt="Nasa" width="10" height="10"></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Blockchain</span>
            <span class="badge bg-secondary skillspace">Banking</span>
            <span class="badge bg-secondary skillspace">Innovation</span>
          </div>
          <div class="moreinfo">
            Pitched the idea of an internal cryptocurrency that would allow USAA to test out the rewards and risks of this technology and expand the regulatory landscape
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Hacktober - Phantom  <img src={trophy} alt="trophy" width="10" height="10"></img></div>
          <div class="right">
            <a href="https://devpost.com/software/phantom-z648hj">
              <img src={link} alt="Team Phantom" width="10" height="10"></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">HTML</span>
            <span class="badge bg-secondary skillspace">CSS</span>
            <span class="badge bg-secondary skillspace">JavaScript</span>
            <span class="badge bg-secondary skillspace">IBM Watson</span>
            <span class="badge bg-secondary skillspace">node.js</span>
            <span class="badge bg-secondary skillspace">Bootstrap</span>
            <span class="badge bg-secondary skillspace">Google Web Speech API</span>
            <span class="badge bg-secondary skillspace">Firebase</span>
          </div>
          <div class="moreinfo">
          Performed natural language processing to automatically summarize customer-representative conversations into a few key main points, which are stored to convey the substance of the customer's issues
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Tamuhack  - Plane Buddy</div>
          <div class="right">
            <a href="https://devpost.com/software/plane-buddy">
              <img src={link} alt="PlaneBuddy" width="10" height="10"></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">HTML</span>
            <span class="badge bg-secondary skillspace">CSS</span>
            <span class="badge bg-secondary skillspace">JavaScript</span>
            <span class="badge bg-secondary skillspace">Firebase</span>
          </div>
          <div class="moreinfo">
          Created an app to allow passenger seating matching based on interest and noise level to make a more enjoyable flight
          </div>
        </div>
        <div class="gallery">
          <div class="desc">HackUTD - Spectral Receipts</div>
          <div class="right">
            <a href="https://devpost.com/software/hackutd-kejp">
              <img
                src={link}
                alt="Spectral Receipt"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Android Studio</span>
            <span class="badge bg-secondary skillspace">Java</span>
            <span class="badge bg-secondary skillspace">QR Code</span>
            <span class="badge bg-secondary skillspace">JSON</span>
          </div>
          <div class="moreinfo">
            Created an android app to help reduce receipt waste by allowing for QR code generation for receipts so they could scan and store in the app
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Tamu Datathon – Stock Prediction</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/Stock-Prediction-TAMU-Datathon-2020">
              <img
                src={link}
                alt="Stock Predictions"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Python</span>
            <span class="badge bg-secondary skillspace">Jupyter Notebook</span>
          </div>
          <div class="moreinfo">
            Created a agent to make a decision whether to buy, sell, or do nothing based on stock data
          </div>
        </div>
        <div class="gallery">
          <div class="desc">UNIX Folder Watcher</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/fileWatcher">
              <img
                src={link}
                alt="Unix Folder Watcher"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">C++</span>
            <span class="badge bg-secondary skillspace">Makefile</span>
            <span class="badge bg-secondary skillspace">Unix</span>
            <span class="badge bg-secondary skillspace">Daemon Process</span>
            <span class="badge bg-secondary skillspace">Unix Signals</span>
            <span class="badge bg-secondary skillspace">File backup</span>
          </div>
          <div class="moreinfo">
            Created a Unix daemon process that would watch a folder and create backups once a change was made in a .versions folder
          </div>
        </div>
        <div class="gallery">
          <div class="desc">HackUTD - Veri-News</div>
          <div class="right">
            <a href="https://devpost.com/software/veri-news">
            <img
                src={link}
                alt="Unix Folder Watcher"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Angular</span>
            <span class="badge bg-secondary skillspace">HTML</span>
            <span class="badge bg-secondary skillspace">Sass</span>
            <span class="badge bg-secondary skillspace">JavaScript</span>
            <span class="badge bg-secondary skillspace">TypeScript</span>
            <span class="badge bg-secondary skillspace">IBM Watson</span>
            <span class="badge bg-secondary skillspace">Bootstrap</span>
          </div>
          <div class="moreinfo">
            Created a website bias analysis which allow the user to input a website and we would give a score based on the analysis of the webpage on how biased an article is
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Wordle Bot </div>
          <div class="right">
            <a href="https://github.com/PSoysauce/wordle">
            <img
                src={link}
                alt="Unix Folder Watcher"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Python</span>
          </div>
          <div class="moreinfo">
            Created a bot to solve wordle by calculating the best next guess and allowing user input or a way to randomly generate words to practice
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Grocery Assistant</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/GroceryAssistant">
              <img
                src={link}
                alt="Grocery Assistant"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Angular</span>
            <span class="badge bg-secondary skillspace">HTML</span>
            <span class="badge bg-secondary skillspace">CSS</span>
            <span class="badge bg-secondary skillspace">JavaScript</span>
            <span class="badge bg-secondary skillspace">TypeScript</span>
            <span class="badge bg-secondary skillspace">Firebase</span>
          </div>
          <div class="moreinfo">
          Created a concept grocery store page that would allow volunteers during covid to pickup groceries for elderly or immunocompromised individuals
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Fantasy Football</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/3354-theboyz">
              <img
                src={link}
                alt="Fantasy Football Android App"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
          <div class="skillused">
            <span class="badge bg-secondary skillspace">Android Studio</span>
            <span class="badge bg-secondary skillspace">Java</span>
          </div>
          <div class="moreinfo">
            Created an Android app for Fantasy Football that allows a draft, adding / dropping players, trades, and much more
          </div>
        </div>
      </div>
    </div>
  );
}
