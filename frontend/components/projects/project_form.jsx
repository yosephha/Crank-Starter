import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const categories = [
  "Art",
  "Autos",
  "Entertainment",
  "Food",
  "Music",
  "Photography",
  "Productivity",
  "Sports",
  "Technology"
];

class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    debugger
    this.state = ({
      title: "",
      url: "",
      description: "",
      end_date: "",
      creator_id:this.props.currentUser.id,
      category: "",
      funding_goal: 0,
      reward: [{
        title: "",
        description: "",
        amount: 0
      }]
    });
  }
  // 
  // componentDidMount(){
  //
  // }

  render(){

    return (
      <div>
        <form>
          <label>Project Image:
            <input type="text" value={this.funding_goal} />
          </label>
          <br />
          <label>Project title:
            <input type="text" value={this.title} />
          </label>
          <br />
          <label>Website:
            <input type="text" value={this.title} />
          </label>
          <br />
          <label>Description:
            <input type="text" value={this.description} />
          </label>
          <br />
          <label>Category:
            <input type="text" value={this.category} />
          </label>
          <br />
          <label>Project Location:
            <input type="text" />
          </label>
          <br />
          <label>End Date:
            <input id="date" type="date" />
          </label>
          <br />
          <label>Funding Goal:
            <input type="text" value={this.funding_goal} />
          </label>
          <br />
          <label>Details:
            <input type="text" value={this.funding_goal} />
          </label>
          <br />
          <input type='submit' value='NEXT' />
        </form>
      </div>
    );
  }
}

export default ProjectForm;
