# Crankstarter

[Heroku Link]

## Minimum Viable Product

Crank Starter is a web application inspired by Kick Starter, a crowd-funding web application, built using Ruby on Rails and React/Redux. By June 30, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Projects
- [ ] Backing projects & rewards
- [ ] Search
- [ ] Categories
- [ ] Production README [sample](../README.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: components.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: sample-schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Projects (2 days)

**Objective:** Projects can be created, viewed, edited, and destroyed through the API.

### Phase 3: Backing projects & rewards (2 days)

**Objective:** Users can back projects and receive rewards. Each pledge will increment the project's total funds raised.

### Phase 4: Search (2 days)

**Objective:** Search bar which filters results dynamically.

### Phase 5: Categories (2 days)

**Objective:** Display project categories via nav-bar menu. Selecting a category displays all projects under that category.

### Bonus Features (TBD)
- [ ] Likes
- [ ] Credit card payments
