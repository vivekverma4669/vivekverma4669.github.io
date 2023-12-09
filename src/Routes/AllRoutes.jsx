// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav';
import Name from './Components/Name';
import About from './Components/About';
import Tech from './Components/Tech';
import Project from './Components/project';
import Contact from './Components/contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
