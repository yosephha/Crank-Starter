import React from 'react';
import ContributionFormContainer from './contribution_form_container';

class ContributionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.id);
  }

  render(){
    if (!this.props.project) {
      return null;
    } else {


    const project = this.props.project;
    const userName = this.props.currentUser.username;

    const rewards = project.rewards.map((reward) => {
      return (
        <ContributionFormContainer key={reward.id} reward={reward} project={project} />
      )
    });

    return (
      <div className="contribution-index-container">
        <div className="contribution-header">
          <h1>{project.title}</h1>
          <h4>by {userName}</h4>
        </div>

        <div className="contribution-list-container">
          {rewards}
        </div>
      </div>
    );
  }
  }
};

export default ContributionIndex;
