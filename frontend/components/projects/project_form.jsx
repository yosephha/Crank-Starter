import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
      reward: [{
         title: "",
         description: "",
         amount: 0
       }]
    });
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.reward = this.reward.bind(this);
    this.addReward = this.addReward.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
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

    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[details]", this.state.details);
    formData.append("project[website]", this.state.website);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[category_id]", category[this.state.category]);
    formData.append("project[funding_goal]", this.state.funding_goal);
    formData.append("project[project_img]", this.state.project_img_file);
    formData.append("project[reward]", JSON.stringify(this.state.reward));

    this.props.createProject(formData)
    .then((resp) =>  (this.props.history.push(`/projects/${resp.project.id}`))
  );

  }

  setAmount(index,e){
    this.state.reward[index].amount=e.target.value;
  }

  setTitle(index,e){
    this.state.reward[index].title=e.target.value;
  }

  setReward(index,e){
    this.state.reward[index].description=e.target.value;
  }

  addReward(e){
    e.preventDefault();
    e.stopPropagation();

    let rewards = this.state.reward;
    rewards.push({
      title: "",
      description: "",
      amount: 0
    });

    this.setState({reward: rewards});
  }

  reward() {
    return (
      this.state.reward.map((rewards, index) => {
        return(
          <div key={index} className="project-description-form reward-form-toggle">
          <p className="input-label-description">Reward {index+1}</p>

          <div className="add-reward-table">
            <ul>
              <li>
                <span>Title</span>
                <input type="text" onChange={this.setTitle.bind(this,index)}/>
              </li>
              <li>
                <span>Amount</span>
                <input type="number" onChange={this.setAmount.bind(this,index)}/>
              </li>
              <li>
                <span>Description</span>
                <textarea onChange={this.setReward.bind(this,index)}></textarea>
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
                  {this.reward()}
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
