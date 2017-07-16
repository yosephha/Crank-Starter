# Crankstarter

[Crankstarter live][heroku]


Crank Starter is a single page web application inspired by Kick Starter, a crowd-funding web application, built using Ruby on Rails and React/Redux.

![Clickstarter index][index]

## Features
- Account creation and authentication with demo login
- Creating and deleting projects
- Adding and backing rewards in a project
- Search projects by title
- Filter project by Category

## Implementation

### User Authentication
Uses BCrypt to to hash and salt users passwords and stores the digest
Enables users to maintain their session unless they explicitly logout
Requires users to be logged in to start a project and make contributions. achieves this using protected routes

```javascript
  const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  );

```


### Projects
When the Index page loads it makes an AJAX request to fetch all the projects. As the controller receives the request it builds a JSON of all the necessary attributes and associations for displaying the tile.

Starting a project asks for all required fields of the project and all rewards associated with it. It then creates both in one request

![Start a Project][start-project]

many rewards can be generated for a single project
This was achieved by having a separate reward form component that appends its self to the form.
the local state collects all the information and sends it all together at once.

```javascript
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
```

### Contribution
Contribution goes to a rewards index page where users can choose a reward with a minimum amount value. The app performs a check to see if the amount entered by user is greater or equal to reward amount.

![Contribution][contribution]
### Categories
Explore tab is a list of all the available categories.

```Ruby
def index
  @categories = Category.all
end
```
when a user makes a selection, a request is made to the controller. the controller then replies with projects that belong to the chosen category.

```Ruby
if params[:category]
  @projects = Project.where(category_id: params[:category])
else
```

### Search
The search input field has an onChange listener that enables it to have a live search with each key press

![Clickstarter index][giphy]

The search controller sends matching result based on title
```Ruby
def index
  @projects = Project.where('lower(title) Like ?', "%#{params[:data].downcase}%")
  render "api/projects/index"
end
```
### Future Implementations
- [ ] Likes
- [ ] Credit card payments

[heroku]: https://crankstarter.herokuapp.com
[index]: ./app/assets/images/landing_page.png
[giphy]: ./app/assets/images/search_gif.gif
[start-project]: ./app/assets/images/start-project.gif
[contribution]: ./app/assets/images/contribution.png
