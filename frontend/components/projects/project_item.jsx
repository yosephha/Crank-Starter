import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';

const ProjectItem = (props) => {
  return(
    <div className="project-item">
      <div className="project-img">
        <img className="img" src={props.project.project_img} />
      </div>
      <div className="project-category">
        <h4>{props.category.name}</h4>
      </div>
      <div className="title-block">
        <span className="project-title">
          {props.project.title}:
        </span>
        {' '}
        <span className="project-description">
          {props.project.description}
        </span>
      </div>

      <div>
        by: {' '}
        <span>{props.project.creator}</span>
      </div>

      <p>{props.project.id}</p>
      <p>{props.project.title}</p>
      <p>{props.project.description}</p>
      <p>{props.project.creator.username}</p>
      <p>{props.project.category_id}</p>
      <p>{props.project.end_date}</p>
      <p>{props.project.funding_goal}</p>
    </div>
  );
};

export default ProjectItem;
