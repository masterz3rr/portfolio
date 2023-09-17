
import './App.css';
import About from './components/AboutMe/About';
import Repositories from './components/Repositories/Repositories';
import Career from './components/career/Career';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Workspace from './components/workspace/Workspace';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Repositories/>
      <Career/>
      <Workspace/>
      <Footer/>
    </div>
  );
}

export default App;
