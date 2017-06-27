import ContributionForm from './contribution_form';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(ContributionForm);
