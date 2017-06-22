import React from 'react';
import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { allProjects } from '../../reducers/selector';
import { fetchCategories } from '../../actions/category_action'

const mapStateToProps = (state) => {
  return ({
    projects: allProjects(state),
    categories: state.categories
  });
}
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
