import React from 'react';
import { NavLink } from 'react-router-dom';


class Categories extends React.Component {

  componentDidMount(){
    this.props.fetchCatagories();
  }

  render(){
    const categories = this.props.categories.map((category) => {
      return (
        <li>
          <NavLink to={`/categories/${category.id}`} >
            {category.name}
            {category.number_of_projects}
          </NavLink>
      </li>
      );
    });

    return (
      <div>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

export default Categories;
