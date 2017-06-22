import React from 'react';
import ProjectItem from './project_item'

class ProjectIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProjects();
    this.props.fetchCategories();
  }

  render() {
    const projects = this.props.projects.map((project) =>
    <ProjectItem
      key={project.id}
      project={project}
    />);
    return (
      <section className ="listOfposts">
        <ul className="indexContainer">
          {projects}
        </ul>
      </section>
    );
  }
}

export default ProjectIndex;
