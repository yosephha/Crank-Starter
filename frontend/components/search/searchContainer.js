import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_action';
import { fetchProjects } from '../../actions/project_actions';
import { allProjects } from '../../reducers/selector';
import { fetchCategories } from '../../actions/category_action';
import Search from './search';


const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    projects: allProjects(state),
    filteredProjects: state.searchProjects,
    categories: state.categories
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSearch: (data) => dispatch(fetchSearch(data)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
