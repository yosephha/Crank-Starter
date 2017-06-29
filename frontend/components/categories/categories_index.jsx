import React from 'react';
import ProjectItem from '../projects/project_item';

class CategoriesIndex extends React.Component {

  componentDidMount(){
    debugger
    this.props.fetchCategoryProjects(this.props.match.params.id)
  }


  componentWillReceiveProps(nextProps){
    debugger
    if(this.props.location.pathname.slice(9) !== nextProps.match.url.slice(9)) {
      this.props.requestCategory(nextProps.match.url.slice(9));
    }
  }

  render(){
    debugger
    return (
      <div>
        CCCCCCCata
      </div>
    );
  }
}

export default CategoriesIndex;
