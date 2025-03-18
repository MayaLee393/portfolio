
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap (if needed)
// import { Container } from 'react-bootstrap';

import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages";
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects';

import React from "react";

// Replace with your actual API key

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
            {/* Dynamic Job Details Page */}
            {/* <Route path="/jobs/:jobName" element={<JobInstance />} />
            <Route path="/communities/:communityName" element={<CommunityInstance />} />
            <Route path="/translations/:translationName" element={<TranslationInstance />} /> */}
          </Routes>
        </Router>
    </>
  );
}

export default App;
