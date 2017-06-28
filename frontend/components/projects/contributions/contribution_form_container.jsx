import ContributionForm from './contribution_form';
import { connect } from 'react-redux';
import { createContribution } from '../../../actions/contribution_action.js';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    currentUser: state.session.currentUser
    // project: state.projects[ownProps.match.id]
  });
}

const mapDispatchToProps = dispatch => ({
  createContribution: (contribution) => dispatch(createContribution(contribution)),
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionForm);
