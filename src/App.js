import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Rohan</h1> */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
