import React from 'react';
import { NavLink } from 'react-router-dom';


class Categories extends React.Component {

  componentDidMount(){
    this.props.fetchCatagories();
  }

  render(){
    const categories = this.props.categories.map((category) => {
      return (
        <li key={category.id}>
          <NavLink to={`/categories/${category.id}`} >
            {category.name}
          </NavLink>
            <span className="explore-green">{category.number_of_projects}</span>
      </li>
      );
    });

    return (
      <div className="explore-container">
        <h3 className="explore-green">Categories</h3>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

export default Categories;
