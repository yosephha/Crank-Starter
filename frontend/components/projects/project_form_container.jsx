import ProjectForm from './project_form';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  debugger
  return ({
    currentUser: state.session.currentUser
  });
}
const mapDispatchToProps = () => {
  return({
    createProject: (project) => (dispatch(createProject(project)))
  });
};

export default connect(
  mapStateToProps
)(ProjectForm);
