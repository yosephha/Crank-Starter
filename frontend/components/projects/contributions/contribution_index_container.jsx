import ContributionIndex from './conribution_index.jsx';
import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return ({
    currentUser: state.session.currentUser,
    project: state.projects[id]
  });
}

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionIndex);
