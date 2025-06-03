import React from 'react';

const ProjectCard = ({
    projectItem
}) => {
    return (
        <div >
           <a href={projectItem.project_link} target="_blank" rel="noopener noreferrer" className="card text-decoration-none shadow-lg rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="card-body d-flex flex-column justify-content-between h-full" style={{ flex: 1 }}>
                    <h5 className="card-title text-lg font-bold">{projectItem.name}</h5>
                    {projectItem.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                        <p className='text-center'>{line}</p>
                        </React.Fragment>
                    ))}
                    <hr></hr>
                    <p className="card-text text-sm ">
                        {projectItem.github_link !== "N/A" && (
                            <a
                                href={projectItem.github_link} // Path to the PDF in the public folder
                                target="_blank"  // Open in a new tab
                                rel="noopener noreferrer" // For security reasons
                                >
                                <button className="btn mb-2 mr-4">
                                    Github
                                </button>
                            </a>
                        )}
                        {projectItem.website_link !== "N/A" && (
                            <a
                                href={projectItem.website_link} // Path to the PDF in the public folder
                                target="_blank"  // Open in a new tab
                                rel="noopener noreferrer" // For security reasons
                                >
                                <button className="btn mb-2">
                                Website
                                </button>
                            </a>
                        )}<br/>
                        Languages/Tools: {projectItem.languages_tools.join(", ")} <br />
                    </p>
                </div>
           </a>
        </div>
    );
};

export default ProjectCard;