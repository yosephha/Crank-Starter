import React from 'react';
import ProjectItem from '../projects/project_item';
import { NavLink } from 'react-router-dom';
import Footer from '../footer';

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

  update() {
    return e => this.setState({
      'searchRes': e.currentTarget.value,
      'projects': this.filterByTitle(e.currentTarget.value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({'projects': this.filterByTitle(this.state["searchRes"])});
  }

  filterByTitle(title){
    const filtered = this.props.projects.filter((project) => {
      let p_title = project.title.toLowerCase().replace(/\s/g, '');
      if (p_title.includes(title.toLowerCase().replace(/\s/g, ''))) {
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
              onChange={this.update()}
              placeholder="Search"
              autoFocus={true}
            />
          </div>

          <NavLink to="/" className="close-search">
            <i className="fa close-search fa-times" aria-hidden="true"></i>
          </NavLink>
        </div>

        <div className="indexContainer">
          {projects.length ? projects : 'Oops! Looks like we couldn’t find any results...'}
        </div>
        <Footer />
      </div>

    );
  }
}

export default Search;
