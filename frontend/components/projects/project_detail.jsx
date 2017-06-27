import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

class ProjectDetail extends React.Component {
  constructor(props){
    super(props);

    this.userButtons = this.userButtons.bind(this);
    this.stats = this.stats.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchProjects();
  }

  dateRemaining(end_date){
    const currentDate = new Date();
    return this.numberWithCommas(
      Math.ceil((new Date(end_date) - currentDate) / 86400000)
    );
  }


  numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  userButtons() {
    let detailId = this.props.project.creator ? this.props.project.creator_id : 0;
    if (this.props.currentUser && detailId === this.props.currentUser.id) {
      const destroyProject = () => {
        this.props.deleteProject(this.props.project);
      };
      return(
        <span className="userButtons">
          <Link to={`/projects/${this.props.project.id}/edit`}>
            <button className="show-edit-button">
              <i className="fa fa-pencil-square-o" aria-hidden="true">Edit</i>

            </button>
          </Link> &nbsp;
          <Link to="/">
            <button
              onClick={ destroyProject }
              className="show-delete-button"
            >
            <i className="fa fa-trash-o" aria-hidden="true">Delete</i>
            </button>
          </Link>
        </span>
      );
    } else {
      return "";
    }
  }

  stats(){
    const project = this.props.project;
    return(
      <div className="detail-stats">
        <div className="show-amount">
          <span className="show-number funded-amt">$500</span>
          <span className="show-stat-txt">
            pledged of {project.funding_goal} goal
          </span>
        </div>

        <div className="show-amount">
          <span className="show-number">750</span>
          <span className="show-stat-txt">backers</span>
        </div>

        <div className="remaining">
          <span className="show-number">{this.dateRemaining(project.end_date)}</span>
          {' '}
          <span className="show-stat-txt">days to go</span>
        </div>
        <input
          type="submit"
          value="Back this project"
          className="back-project-button"
        />
        {this.userButtons()}
        <p>
          All or nothing. This project will only be funded if it reaches its
          goal by Sat, {project.end_date}
        </p>
      </div>
    );
  }

  render(){
    const project = this.props.project;
    const categories = this.props.categories;
    if(this.props.project === undefined) return null;
    return(
      <div className="project-show-page">
        <div>

          <div className="detail-user-title">
            <div className="detail-user">
              <p className="detail-user-name">
                By<span>{project.creator}</span>
              </p>
            </div>
            <div className="display-title">
              <p id="display-title">{project.title}</p>
              <p id="descriptionText">{project.description}</p>
            </div>
          </div>

          <div className="detail-img-stats">
            <div className="detail-project-img">
              <img className="detail-img" src={project.project_img} />
            </div>
            {this.stats()}
          </div>
          <div className="show-picture-footer">
            <i className="fa spf fa-circle-o-notch" aria-hidden="true">Project We Love</i>
            <i className="fa spf fa-compass" aria-hidden="true">Product Design</i>
          </div>

          <div className="show-about-project">
            <p className="show-about-title">About this project</p>
            <div>
              {project.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
