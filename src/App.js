
import './App.css';
import './components/hero/hero.css';
import Footer from './components/footer/Footer';
import React, { createContext, useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './containers/AboutPage/AboutPage';
import HomePage from './containers/HomePage/HomePage';
import Projects from './containers/Projects/Projects';
import WorkspacePage from './containers/WorkspacePage/WorkspacePage';
import Header from './components/Header/Header';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App" id={theme}>
          <div className='mainContent'>
            <Header theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />} />
              <Route path="/about" element={<AboutPage theme={theme} setTheme={setTheme} />} />
              <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme} />} />
              <Route path="/workspace" element={<WorkspacePage theme={theme} setTheme={setTheme} />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
