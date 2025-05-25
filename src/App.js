import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Splash from './Components/Splash/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <Splash
          title="Dalila Katia Leo"
          subtitle="Full-Stack Engineer"
          progressSpeed={25}
          onComplete={handleSplashComplete}
        />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
