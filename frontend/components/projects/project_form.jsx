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
    // debugger
    this.state = ({
      title: "",
      description: "",
      details: "",
      website: "",
      end_date: "",
      creator_id:this.props.currentUser.id,
      category: "",
      funding_goal: 0,
      project_img_file: null,
      project_img_url: null
      // reward: {
      //   1: { title: "Deafalt", description: "deafalt", amount: 5 }
      // }
    });
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }
  //-----------------AWS Tutorial---------------

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


  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();

    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[details]", this.state.details);
    formData.append("project[website]", this.state.website);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[category_id]", this.state.category);
    formData.append("project[funding_goal]", this.state.funding_goal);
    formData.append("project[project_img]", this.state.project_img_file);
    // formData.append("project[reward]", this.state.reward);

    this.props.createProject(formData);
  }

  //--------------------------------

  render(){

    return (
      <div className="form-container">
        <div className="inner-form-container">
          <div className="main-form">
            <form onSubmit={this.handleSubmit} >
              <div className="project-img">
                <div className="input-label">
                  <ul>
                    <li>
                      <span>Project Image</span>
                    </li>
                    <li>
                      <div className="img-container">
                        <img src={this.state.project_img_url}/>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="input-data">
                  <input
                    type="file"
                    className="input-file"
                    onChange={this.updateFile}
                    id="file"
                  />
                </div>
              </div>

              <br />
              <label>Project title:
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="title..."
                  onChange={this.update('title')}
                />
              </label>
              <br />
              <label>Website:
                <input
                  type="text"
                  value={this.state.website}
                  placeholder = 'URL...'
                  onChange={this.update('website')}
                />

              </label>
              <br />
              <label>Description:
                <input type="text"
                  value={this.state.description}
                  placeholder = '...'
                  onChange={this.update('description')}
                />
              </label>
              <br />
              <label>Details:
                <input type="text"
                  value={this.state.details}
                  placeholder = '...'
                  onChange={this.update('details')}
                />
              </label>
              <br />
              <label>Category:
                <input
                  type="text"
                  value={this.state.category}
                  placeholder = 'category'
                  onChange={this.update('category')}
                />
              </label>
              <br />
              <label>End Date:
                <input
                  id="date"
                  type="date"
                  onChange={this.update('end_date')}
                  value={this.state.end_date}
                />
              </label>
              <br />
              <label>Funding Goal:
                <input
                  type="text"
                  value={this.funding_goal}
                  onChange={this.update('funding_goal')}
                  value={this.state.funding_goal}
                />
              </label>
              <br />
              <input type='submit' value='NEXT' />
            </form>
          </div>
          <div className="side-bar">
            <div>
              advert
            </div>
            <div>
              advert
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ProjectForm;
