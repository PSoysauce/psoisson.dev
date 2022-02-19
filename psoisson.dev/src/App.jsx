// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/portfolio/portfolio';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Photography from './components/photography/photography';
import Contact from './components/contact/contact';
import "./app.sass"

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Photography/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
