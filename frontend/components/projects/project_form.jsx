import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { merge, values } from 'lodash';
import {
  inputImg,
  inputBox,
  inputCategory,
  inputDate,
  sideBar,
  formHeader
} from './form_input_box';

class ProjectForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      title: "",
      description: "",
      details: "",
      website: "",
      end_date: "",
      category: "",
      funding_goal: 0,
      project_img_file: null,
      project_img_url: null,
      rewards: [{
         title: "",
         description: "",
         amount: 0
       }]
    });
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.rewards = this.rewards.bind(this);
    this.addReward = this.addReward.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    if(this.props.project){
      this.props.fetchProject(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps){
    if(this.props.project !== newProps.project){
      // const FilledState = {};

      let rewards = newProps.project.rewards.map((reward => (
        {
          title: reward.title,
          description: reward.description,
          amount: reward.amount
        }

      )));

      debugger
      let FilledState = merge({}, this.state);

      FilledState.title = newProps.project.title;
      FilledState.description = newProps.project.description;
      FilledState.details = newProps.project.details;
      FilledState.website = newProps.project.website;
      FilledState.end_date = newProps.project.end_date;
      FilledState.category = newProps.project.category.name;
      FilledState.funding_goal = newProps.project.funding_goal;
      FilledState.project_img_url = newProps.project.project_img;
      FilledState.rewards = rewards;

      debugger
      this.setState(FilledState);
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ project_img_file: file, project_img_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  swap_cat(json){
    var ret = {};
    for(var key in json){
      ret[json[key].name] = key;
    }
    return ret;
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    const category = this.swap_cat(this.props.categories);

    if(this.state.project_img_file){
      formData.append("project[project_img]", this.state.project_img_file);
    }

    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[details]", this.state.details);
    formData.append("project[website]", this.state.website);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[category_id]", category[this.state.category]);
    formData.append("project[funding_goal]", this.state.funding_goal);
    formData.append("project[rewards_attributes]", JSON.stringify(this.state.rewards));

    if(this.props.project){
      debugger
      this.props.updateProject(this.props.project.id, formData)
      .then( resp =>  (
        this.props.history.push(`/projects/${resp.project.id}`)
      ));
    } else {
      this.props.createProject(formData)
      .then((resp) =>  (this.props.history.push(`/projects/${resp.project.id}`)));
    }

  }

  setAmount(index,e){
    this.state.rewards[index].amount=e.target.value;
  }

  setTitle(index,e){
    this.state.rewards[index].title=e.target.value;
  }

  setReward(index,e){
    this.state.rewards[index].description=e.target.value;
  }

  addReward(e){
    e.preventDefault();
    e.stopPropagation();

    let rewards = this.state.rewards;
    rewards.push({
      title: "",
      description: "",
      amount: 0
    });

    this.setState({rewards: rewards});
  }

  rewards() {
    return (
      this.state.rewards.map((rewards, index) => {
        debugger
        return(
          <div key={index} className="project-description-form reward-form-toggle">
          <p className="input-label-description">Reward {index+1}</p>

          <div className="add-reward-table">
            <ul>
              <li>
                <span>Title</span>
                <input type="text"
                  onChange={this.setTitle.bind(this,index)}
                  placeholder={rewards.title}
                />

              </li>
              <li>
                <span>Amount</span>
                <input type="number"
                  onChange={this.setAmount.bind(this,index)}
                  placeholder={rewards.amount}
                  />
              </li>
              <li>
                <span>Description</span>
                <textarea
                  onChange={this.setReward.bind(this,index)}
                  placeholder={rewards.description}
                ></textarea>
              </li>
            </ul>
          </div>
        </div>);
      })
    );
  }

  render(){
    return (
      <div className="form-container">
        {formHeader()}
        <div className="inner-form-container">
          <div className="main-form">
            <form onSubmit={this.handleSubmit} >
              {
                inputImg('Project Image',
                this.state.project_img_url,
                this.updateFile)
              }
              <br />
              {
                inputBox('Project title',
                 'text',
                 this.state.title,
                 this.update('title'), 1, 2
                )
               }
              <br />
              {
                inputBox('Short blurb',
                 'text',
                 this.state.description,
                 this.update('description'), 3
                )
               }
              <br />
              {
                inputBox('Website',
                 'text',
                 this.state.website,
                 this.update('website'), 4
                )
               }
              <br />
              {
                inputBox('Details',
                 'text',
                 this.state.details,
                 this.update('details'), 5
                )
               }
              <br />
              {
                inputCategory(
                  this.state.category,
                  this.update('category')
                )
              }
              <br />
              {inputDate(this.state.end_date, this.update('end_date'))}
              <br />
              {
                inputBox('Funding Goal',
                 'number',
                 this.funding_goal,
                 this.update('funding_goal'), 6, 7, '0'
                )
               }
              <br />
                <div className="wrapper reward-form-toggle">
                  {this.rewards()}
                  <button className="addReward-button"onClick={this.addReward}>Add Reward</button>
                </div>
              <br />
              <input id="start-project-submit" type='submit' value='Create Project!' />
            </form>
          </div>
          {sideBar()}
        </div>
      </div>
    );
  }
}

export default ProjectForm;
