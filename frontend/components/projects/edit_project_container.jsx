import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { updateProject, fetchProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_action';

const mapStateToProps = (state, ownProps) => {
  const project = state.projects[ownProps.match.params.id];
  const rewards = project.rewards

  return ({
    currentUser: state.session.currentUser,
    categories: state.categories,
    project,
    rewards
  });
}

const mapDispatchToProps = dispatch => {
  return({
    updateProject: (id, project) => (dispatch(updateProject(id, project))),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProject: (id) => dispatch(fetchProject(id))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
