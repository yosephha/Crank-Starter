import React from 'react';
import ContributionFormContainer from './contribution_form_container';
import Footer from '../../footer';

class ContributionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.id);
  }

  render(){
    if (!this.props.project) return null;

    const project = this.props.project;
    const userName = this.props.currentUser.username;
    const rewards = project.rewards.map((reward) => (
      <ContributionFormContainer
        key={reward.id}
        reward={reward}
        project={project}
      />
    ));

    return (
      <div className="contribution-index-container">
        <div className="contribution-header">
          <h1>{project.title}</h1>
          <h4>by {userName}</h4>
        </div>

        <div className="contribution-list-container">
          <h2 className="support-this">Support this project</h2>
          {rewards}
        </div>
        <Footer />
      </div>
    );
  }
};

export default ContributionIndex;
