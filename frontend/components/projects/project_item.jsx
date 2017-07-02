import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

const ProjectItem = (props) => {
  const numberWithCommas = (x) => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const dateRemaining = (end_date) => {
    const currentDate = new Date();
    return numberWithCommas(
      Math.ceil((new Date(end_date) - currentDate) / 86400000)
    );
  };

  const calculatePercent = () => (
    Math.floor(props.project.funded / props.project.funding_goal * 100)
  );

  const description = props.project.description ? props.project.description : "";
  const modified = (props.project.title + description).length < 125 ?
    description : description.slice(0, 125 - props.project.title.length) + "...";

  const cal_percent = calculatePercent();
  const percent = cal_percent > 100 ? 100 : cal_percent;

  let categoryName = '';
  if(props.category){
    categoryName = props.category.name
  }

  return(
    <div className="project-item">
      <Link to={`/projects/${props.project.id}`} className="project-img">
        <img className="img" src={props.project.project_img} />
      </Link>

      <div className="discriptions">
        <div className="project-category">
          <h4>{categoryName}</h4>
        </div>
        <div className="title-block">
          <span className="project-title">
            {props.project.title}:
          </span>
          {' '}
          <span className="project-description">
            {modified}
          </span>
        </div>

        <div className="author">
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1497820642/Stock/avatar_nqzvi4.png"
            alt="User icon" className="user-icon-item" />
          by: {' '}
          <span>{props.project.creator}</span>
        </div>
        <Line percent={percent} strokeWidth="2" strokeColor="#2BDE73" />
        <div className="pledged">
          $
          <span>{props.project.funding_goal}</span>
          {' '}
          <span className="stat-txt">pledged</span>
        </div>
        <div className="funded">
          <span>{calculatePercent()}%</span>
           {' '}
          <span className="stat-txt">funded</span>
        </div>
        <div className="remaining">
          <span>{dateRemaining(props.project.end_date)}</span>
          {' '}
          <span className="stat-txt">days to go</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
