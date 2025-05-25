import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Splash from './Components/Splash/Splash';

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 }); // Start mouse position at (0, 0)
  const [showSplash, setShowSplash] = useState(true);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
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
            <Route path="/" element={<Home mousePosition={mousePosition} />} />
            <Route
              path="/about"
              element={<About mousePosition={mousePosition} />}
            />
            <Route
              path="/portfolio"
              element={<Projects mousePosition={mousePosition} />}
            />
            <Route
              path="/resume"
              element={<Resume mousePosition={mousePosition} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
