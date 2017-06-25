import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

class ProjectDetail extends React.Component {

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchProjects();
  }
  render(){
    const project = this.props.project
    const categories = this.props.categories
    
    if(this.props.project === undefined) return null;
    return(
      <div className="project-show-page">
        <div className="project-item">
          <div to={`/projects/${project.id}`} className="project-img">
            <img className="img" src={project.project_img} />
          </div>

          <div className="discriptions">
            <div className="project-category">
              <h4>{categories[project.category_id].name}</h4>
            </div>
            <div className="title-block">
              <span className="project-title">
                {project.title}:
              </span>
              {' '}
              <span className="project-description">
              </span>
            </div>

            <div className="author">
              <i className="fa fa-user-circle-o user-icon" aria-hidden="true"></i>
              by: {' '}
              <span>{project.creator}</span>
            </div>
            <Line percent="60" strokeWidth="2" strokeColor="#2BDE73" />
            <div className="pledged">
              $
              <span>{project.funding_goal}</span>
              {' '}
              <span className="stat-txt">pledged</span>
            </div>
            <div className="funded">
              <span>{100}%</span>
               {' '}
              <span className="stat-txt">funded</span>
            </div>
            <div className="remaining">
              <span>{project.end_date}</span>
              {' '}
              <span className="stat-txt">days to go</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
