import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return(
    <div className="project-item">
      <div className="project-img">
        <img src={project.project_img} />
      </div>
      <p>{project.id}</p>
      <p>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.creator.username}</p>
      <p>{project.category_id}</p>
      <p>{project.end_date}</p>
      <p>{project.funding_goal}</p>
    </div>
  );
};

export default ProjectItem;
