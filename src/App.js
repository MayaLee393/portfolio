
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap (if needed)
// import { Container } from 'react-bootstrap';

import Navbar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages";
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects';

import React from "react";


function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
