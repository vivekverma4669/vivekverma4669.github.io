// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Nav';
import Name from '../Components/Name';
import About from '../Components/About';
import Tech from '../Components/Tech';
import Project from '../Components/project';
import Contact from '../Components/contact';

function AllRoute() {
  return (
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

  );
}

export default AllRoute;
