import React, { useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCard";
import { useLocation } from 'react-router-dom';

const ProjectsPage = () => {
  const location = useLocation()
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchRepositories = async () => {
      try {
        const response = await fetch('/portfolio/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Fetched projects:", data);
        setRepositories(data); 
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchRepositories();
  }, []); 

  useEffect(() => {
    if (repositories.length === 0) return;

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, repositories]);

  return (
    <div className='project-page'>
      <h1 style={{fontFamily:' "VT323", monospace'}} className='text-6xl mb-4'>Projects</h1>
      <div className="project-container justify-center gap-6">
        {Array.isArray(repositories) && repositories.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          repositories
            .filter(repo => repo.visible === true) // Filter only visible projects
            .map((repo) => (
              <div key={repo.id} id={`project-${repo.id}`} className="card-container w-full ">
                <ProjectCard projectItem={repo} className="w-full" />
              </div>
            ))
        )}
      </div>
    </div>


  );
};

export default ProjectsPage;
