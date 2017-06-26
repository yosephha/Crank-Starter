import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

class ProjectDetail extends React.Component {
  constructor(props){
    super(props);

    this.userButtons = this.userButtons.bind(this);
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
          <Link to={`/projects/${this.props.project.id}/edit`}><button>Edit this project</button></Link> &nbsp;
          <Link
            to="/"><button
            onClick={ destroyProject }
          >Delete this project</button></Link>
        </span>
      );
    } else {
      return "";
    }
  }

  render(){
    const project = this.props.project;
    const categories = this.props.categories;
    if(this.props.project === undefined) return null;
    return(
      <div className="project-show-page">
        <div>
          {this.userButtons()}

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

            <div className="detail-stats">
              <div className="pledged">
                $
                <span>{project.funding_goal}</span>
                {' '}
                <span className="stat-txt">pledged</span>
              </div>

              <div className="remaining">
                <span>{this.dateRemaining(project.end_date)}</span>
                {' '}
                <span className="stat-txt">days to go</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
