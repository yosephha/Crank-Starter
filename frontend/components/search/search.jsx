import React from 'react';
import ProjectItem from '../projects/project_item';
import { NavLink } from 'react-router-dom';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRes: "",
      projects: this.props.projects
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchProjects();
    this.props.fetchCategories();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      'projects': this.filterByTitle(this.state["searchRes"])
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({'projects': this.filterByTitle(this.state["searchRes"])});
  }

  filterByTitle(title){
    const filtered = this.props.projects.filter((project) => {
      if (project.title.toLowerCase().includes(title.toLowerCase())) {
        return project;
      }
    });

    return filtered;
  }

  render(){

    const projects = this.state.projects.map((project) => {
      const category = this.props.categories[project.category_id]

      return ( <ProjectItem
        key={project.id}
        project={project}
        category={category}
      />);
    }, this);

    return (
      <div className="search-index">
        <div className="search-bar">
          <div className="search-bar-left">
            <i className="fa fa-search" aria-hidden="true"></i>

            <input type="text"
              value={this.state.username}
              onChange={this.update("searchRes")}
              placeholder="Search"
              autoFocus={true}
            />
          </div>

          <NavLink to="/" className="close-search">
            <i className="fa close-search fa-times" aria-hidden="true"></i>
          </NavLink>
        </div>

        <div className="indexContainer">
          {projects}
        </div>
      </div>

    );
  }
}

export default Search;
