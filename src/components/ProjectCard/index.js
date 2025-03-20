import React from 'react';

const ProjectCard = ({
    projectItem
}) => {
    return (
        <div >
           <a href={projectItem.project_link} target="_blank" rel="noopener noreferrer" className="card text-decoration-none shadow-lg rounded-lg">
                <div className="card-body d-flex flex-column justify-content-between h-full" style={{ flex: 1 }}>
                    <h5 className="card-title text-lg font-bold">{projectItem.name}</h5>
                    {projectItem.description} <br />
                    <hr></hr>
                    <p className="card-text text-sm">
                        {projectItem.website_link !== "N/A" && (
                            <>Website: <a href={projectItem.website_link} target="_blank" rel="noopener noreferrer">{projectItem.website_link}</a><br /></>
                        )}
                        Languages/Tools: {projectItem.languages_tools.join(", ")} <br />
                    </p>
                </div>
           </a>
        </div>
    );
};

export default ProjectCard;