import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProject, fetchProjects } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_action';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ({
    project: state.projects[id],
    categories: state.categories
  });
}

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
