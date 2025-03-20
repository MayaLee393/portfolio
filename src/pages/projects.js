import React, { useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('/portfolio/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched projects:", data);
        setRepositories(data); 
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchRepositories();
  }, []); 

  return (
    <div className='project-page'>
      <h1 className='mb-4'>Projects</h1>
      <p>Click on a card to open a project link</p>
      <div className="project-container flex flex-wrap justify-center gap-6">
        {Array.isArray(repositories) && repositories.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          repositories
            .filter(repo => repo.visible === true) // Filter only visible projects
            .map((repo) => (
              <div key={repo.id} className="card-container w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <ProjectCard projectItem={repo} className="w-full h-full max-w-sm" />
              </div>
            ))
        )}
      </div>
    </div>


  );
};

export default ProjectsPage;
