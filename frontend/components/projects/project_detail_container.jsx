import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProject, fetchProjects, deleteProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_action';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ({
    project: state.projects[id],
    categories: state.categories,
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: (project) => dispatch(deleteProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
