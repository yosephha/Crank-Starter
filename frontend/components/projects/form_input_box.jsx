import React from 'react';

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

const blurb = { 1: "Our search looks through words from your project title and blurb, so make them clear and descriptive of what youre making. Your profile name will be searchable, too.",
  2: "These words will help people find your project, so choose them wisely! Your name will be searchable too.",
  3: "Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.",
  4: "First thing people usually do to understand your ideas. It would make it easier for contributers to do their reserch.",
  5: "Give people a sense of what you’re doing in details. Skip “Help me” and focus on what you’re making, and how It affects others.",
  6: "Funding on crankstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.",
  7: "If your project is successfully funded, the followin fees will be collected from your funding total: crankstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees."
}

export const inputImg = (title, proj_img, updateFile) => {
  return(
    <div className="start-project-img start-toggle">
      <div className="input-label">
        <ul>
          <li>
            <span>{title}</span>
          </li>
          <li>
            <div className="img-container">
              <img src={proj_img}/>
            </div>
          </li>
        </ul>
      </div>
      <div className="input-data">
        <input
          type="file"
          className="input-file"
          onChange={updateFile}
          id="file"
        />
      </div>
    </div>
  );
}

export const inputBox = (title, inputType, value, actionFn, i, j, holder) => {
  return(
    <div className="start-project-title start-toggle" >
      <div className="input-label-title">
        <span>{title}</span>
      </div>
      <div className="input-title">
        <ul>
          <li>
            <input
              placeholder={holder}
              type={inputType}
              value={value}
              onChange={actionFn}
              />
          </li>
          <li className="rand-text">
            <p>
              {blurb[i]}
            </p>
            <p>
              {blurb[j]}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const inputCategory = (cat, actionFn) => {
  return(
    <div className="project-description-form start-toggle">
        <div className="input-label-description">
          <span>Category</span>
        </div>
        <div>
          <ul>
            <li>
              <select
                name="expertise"
                onChange={actionFn}
                value={cat}
              >
                <option value="x" disabled="true">--Select a category--</option>
                {
                  categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))
                }
              </select>
            </li>
          </ul>
        </div>
      </div>
  );
}

export const inputDate = (end_date, actionFn) => {
  return (
    <div className="project-description-form start-toggle">
        <div className="input-label-description">
          <span>End Date</span>
        </div>
        <div>
          <ul>
            <li>
              <input
                id="date"
                type="date"
                onChange={actionFn}
                value={end_date}
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
  );
}

export const sideBar = () => {
  return (
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
  );
}

export const formHeader = () => {
  return (
    <div className="start-form-header">
      <h1 className="start-form-header1">
        Let’s get started.
      </h1>
      <h3 className="start-form-header2">
        Make a great first impression with your project’s title and image,
        and set your funding goal, campaign duration, and project category.
      </h3>
    </div>
  );
}
