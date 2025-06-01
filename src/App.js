import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio/">
        <Routes>
          <Route
            path="/"
            element={
              <Home title="Dalila Katia Leo" subtitle="Full-Stack Engineer" />
            }
          />
          <Route path="about/" element={<About />} />
          <Route path="resume/" element={<Resume />} />
          <Route path="projects/" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
