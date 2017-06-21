import * as APIUtil from '../util/project_util';

export const RECIVE_PROJECTS = 'RECIVE_PROJECTS';

export const reciveProjects = projects =>({
  type: RECIVE_PROJECTS,
  projects
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
  .then((projects) => dispatch(reciveProjects(projects))
);
