import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Splash from './Pages/Splash/Splash';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 }); // Start mouse position at (0, 0)
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <Router>
      <div className="App" onMouseMove={handleMouseMove}>
        <Routes>
          <Route path="/" element={<Splash mousePosition={mousePosition} />} />
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
      </div>
    </Router>
  );
}

export default App;
