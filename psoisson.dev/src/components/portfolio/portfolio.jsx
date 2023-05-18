import React from "react";
import "./portfolio.sass";
import link from "../../img/link.png";

export default function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <div class="project">
        <h1>Projects</h1>
      </div>
      <div class="projects">
        <div class="gallery">
          <div class="desc">Texas Instruments - Senior Design Project</div>
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
        </div>
        <div class="gallery">
          <div class="desc">Nasa - Orion Capsule Heat Shield Spectrometer</div>
          <div class="right">
            <a href="https://docs.google.com/presentation/d/1Mw_838Zlai4wDD4g0TZJvgwKiFayK2Nu/edit?usp=sharing&ouid=111700840446315981460&rtpof=true&sd=true">
              <img src={link} alt="Nasa" width="10" height="10"></img>
            </a>
          </div>
        </div>

        <div class="gallery">
          <div class="desc">USAA Centennial Hackathon - Memecoin Rewards</div>
          <div class="right">
            <a href="https://drive.google.com/file/d/1xTnXzsC7syhfAQEa_4UF8R9D0v8Q0WRd/view?usp=share_link">
              <img src={link} alt="Nasa" width="10" height="10"></img>
            </a>
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Hacktober - Phantom</div>
          <div class="right">
            <a href="https://devpost.com/software/phantom-z648hj">
              <img src={link} alt="Team Phantom" width="10" height="10"></img>
            </a>
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Tamuhack  - Plane Buddy</div>
          <div class="right">
            <a href="https://devpost.com/software/plane-buddy">
              <img src={link} alt="PlaneBuddy" width="10" height="10"></img>
            </a>
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
        </div>
        <div class="gallery">
          <div class="desc">HackUTD - Veri-News</div>
          <div class="right">
            <a href="https://devpost.com/software/veri-news">
              <img src={link} alt="Veri-News" width="10" height="10"></img>
            </a>
          </div>
        </div>
        <div class="gallery">
          <div class="desc">Wordle Bot </div>
          <div class="right">
            <a href="https://github.com/PSoysauce/wordle">
              <img src={link} alt="WordleBot" width="10" height="10"></img>
            </a>
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
        </div>
        <div class="gallery">
          <div class="desc">Fantasy Footbal Android App</div>
          <div class="right">
            <a href="https://github.com/PSoysauce/3354-theboyz">
              <img
                src={link}
                alt="Fantasy Footbal Android App"
                width="10"
                height="10"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
