import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const ProjectSection = () => {
    const id_array = [6, 7, 8]
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
        const project_array = []
        for(let i=0; i<id_array.length; i++) {
            const project = data.find(p => p.id === id_array[i]);
            if (project) {
                project_array.push(project);
            }
        }
        console.log("display projects:", project_array);
        setRepositories(project_array); 
        } catch (error) {
        console.error('Error fetching repositories:', error);
        }
    };
    fetchRepositories();
    }, []); 

  return (
    <div>
      
        <div className='project-section container text-center mt-4'>
          <div className='project-header text-left flex items-center justify-between mb-4'>
              <h1 className="text-2xl font-bold md:text-4xl  ">Projects</h1>
              <Link to="/projects" className='text-base md:text-lg mr-4 hover:scale-125'>
              <div className='flex gap-4 no-underline'>
                    <div><p className='no-underline'>More Projects</p></div>
                    <div><FaArrowRight /></div>
              </div>
                  

              </Link>
          </div>
          {Array.isArray(repositories) && repositories.length === 0 ? (
          <p>Loading projects...</p>
                ) : (
                repositories.map((repo) => (
                    <div className='project-bar mobile-bar row mb-2 '>
                        <div className='project-picture col-md-4 d-none d-md-block position-relative overflow-hidden'>
                            <img
                                src={`${process.env.PUBLIC_URL}/${repo.picture}`}
                                alt="Project preview"
                                className="w-100 h-100 object-cover position-absolute top-0 start-0"
                            />
                            <div className='slanted-edge position-relative'></div>
                        </div>

                        <div className='project-content mobile-project text-left col-12 col-md-8  d-flex justify-between align-items-center '>
                        <div>
                            <h1 className=" text-xl font-bold">{repo.name}</h1>
                            <p>{repo.description.includes('\n')? repo.description.slice(0, repo.description.indexOf('\n')) : repo.description}</p>
                             <p>Languages/Tools: {repo.languages_tools.join(", ")} </p>
                        </div>
                            <Link
                                to={`/projects#project-${repo.id}`}
                                className="no-underline d-flex align-items-center text-3xl mr-4 hover:scale-150"
                                    style={{ color: 'var(--color3)' }}
                            >
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                    ))
                )}
          
          
        </div>
        <br/>
    </div>
  )
}

export default ProjectSection
