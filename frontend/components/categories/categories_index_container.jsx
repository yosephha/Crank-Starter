import CategoriesIndex from './categories_index';
import { connect } from 'react-redux';
import { fetchCategoryProjects } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  
  const categoryId = ownProps.match.params.id;
  return ({
    category: state.categories[categoryId],
    projects: state.projects
  });
}

const mapDispatchToProps = dispatch => ({
  fetchCategoryProjects: (category_id) => dispatch(fetchCategoryProjects(category_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
