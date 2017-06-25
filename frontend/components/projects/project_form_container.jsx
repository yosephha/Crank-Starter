import ProjectForm from './project_form';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_action'

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    categories: state.categories
  });
}
const mapDispatchToProps = (dispatch) => {
  return({
    createProject: (project) => (dispatch(createProject(project))),
    fetchCategories: () => dispatch(fetchCategories())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
