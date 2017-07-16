import React from 'react';
import ProjectItem from '../projects/project_item';

class CategoriesIndex extends React.Component {
  componentDidMount(){
    this.project = this.props.fetchCategoryProjects(this.props.match.params.id)
  }

  render(){
    if(!this.props.projects) return null;

    const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);

    return (
      <section className ="all-projects">
        <ul className="indexContainer">
          { projects.map(project =>
            <li key={project.id} className="category-item">
              <ProjectItem
                project={project}
                category={this.props.category}
            />
          </li>)}
        </ul>
      </section>
    );
    }
 }

export default CategoriesIndex;
