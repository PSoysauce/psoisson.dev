// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/portfolio/portfolio';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import AboutMe from './components/aboutme/aboutme';
import Contact from './components/contact/contact';
import Skills from './components/skills/skills'
import Experience from './components/experience/experience'
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className="sections">
        <Intro/>
        <Experience/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
