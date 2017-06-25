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
    // this.props.history.push('/');
  }

  //--------------------------------

  render(){

    return (
      <div className="form-container">
        <div className="start-form-header">
          <h1 className="start-form-header1">
            Let’s get started.
          </h1>
          <h3 className="start-form-header2">
            Make a great first impression with your project’s title and image,
            and set your funding goal, campaign duration, and project category.
          </h3>
        </div>
        <div className="inner-form-container">
          <div className="main-form">
            <form onSubmit={this.handleSubmit} >
              <div className="start-project-img">
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

              <div className="start-project-title">
                <div className="input-label-title">
                  <span>Project title</span>
                </div>
                <div className="input-title">
                  <ul>
                    <li>
                      <input
                        type="text"
                        value={this.state.title}
                        placeholder="title..."
                        onChange={this.update('title')}
                        />
                    </li>
                    <li className="rand-text">
                      <p>
                        Our search looks through words from your project title
                        and blurb, so make them clear and descriptive of what
                        you’re making. Your profile name will be searchable,
                        too.
                      </p>
                      <p>
                        These words will help people find your project, so choose
                        them wisely! Your name will be searchable too.
                      </p>
                    </li>
                </ul>
              </div>
              </div>

              <br />

              <div className="project-description-form">
                <div className="input-label-description">
                  <span>Short blurb</span>
                </div>
                <div>
                  <ul>
                    <li>
                      <input type="text"
                        value={this.state.description}
                        placeholder = '...'
                        onChange={this.update('description')}
                        />
                    </li>
                    <li className="rand-text">
                      <p >
                        Give people a sense of what you’re doing. Skip
                        “Help me” and focus on what you’re making.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <br />

              <div className="project-description-form">
                <div className="input-label-description">
                  <span>Website</span>
                </div>
                <div>
                  <ul>
                    <li>
                      <input
                        type="text"
                        value={this.state.website}
                        placeholder = 'URL...'
                        onChange={this.update('website')}
                        />
                    </li>
                    <li className="rand-text">
                      First thing people usually do to understand your ideas.
                      It would make it easier for contributers to do their reserch.
                    </li>
                  </ul>
                </div>
              </div>

              <br />

              <div className="project-description-form">
                  <div className="input-label-description">
                    <span>Details</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <input type="text"
                          value={this.state.details}
                          placeholder = '...'
                          onChange={this.update('details')}
                        />
                      </li>
                      <li className="rand-text">
                        <p >
                          Give people a sense of what you’re doing in details.
                          Skip “Help me” and focus on what you’re making, and how
                          It affects others.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

              <br />

              <div className="project-description-form">
                  <div className="input-label-description">
                    <span>Category</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <input
                          type="text"
                          value={this.state.category}
                          placeholder = 'category'
                          onChange={this.update('category')}
                        />
                      </li>
                    </ul>
                  </div>
                </div>

              <br />
                <div className="project-description-form">
                  <div className="input-label-description">
                    <span>End Date</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <input
                          id="date"
                          type="date"
                          onChange={this.update('end_date')}
                          value={this.state.end_date}
                        />
                      </li>
                      <li className="rand-text">
                        <p >
                          Projects with shorter durations have higher success
                          rates. You won’t be able to adjust your duration after
                          you launch.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

              <br />

              <div className="project-description-form">
                  <div className="input-label-description">
                    <span>Funding Goal</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <input
                          type="text"
                          value={this.funding_goal}
                          onChange={this.update('funding_goal')}
                          value={this.state.funding_goal}
                        />
                      </li>
                      <li className="rand-text">
                        <p >
                          Funding on Kickstarter is all-or-nothing. It’s okay to
                          raise more than your goal, but if your goal isn’t met,
                          no money will be collected. Your goal should reflect
                          the minimum amount of funds you need to complete your
                          project and send out rewards, and include a buffer for
                          payments processing fees.
                        </p>
                        <p>
                          If your project is successfully funded, the following
                          fees will be collected from your funding total:
                          Kickstarter’s 5% fee, and payment processing fees
                          (between 3% and 5%). If funding isn’t successful,
                          there are no fees.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

              <br />

              <input id="start-project-submit" type='submit' value='Create Project!' />
            </form>
          </div>
          <div className="side-bar">
            <ul>
              <li>
                <div className="start-tip">
                  <div>
                    <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                  </div>
                  <p>
                    How to:<br />
                    <span className="start-tip-link">Make an awsome project</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="start-advert-head">
                  Need advice?
                </div>
              </li>
              <li>
                <span className="start-plain-text">
                  Visit Campus to read discussions about
                </span>
                {' '}
                <span className="start-tip-link-two">
                  preparing for a project
                </span>
                {' '}
                <span className="start-plain-text">and more.</span>
              </li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
