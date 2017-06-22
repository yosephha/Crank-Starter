import * as APIUtil from '../util/project_util';

export const RECIVE_PROJECTS = 'RECIVE_PROJECTS';
export const RECEIVE_PROJECT_DETAIL = 'RECEIVE_PROJECT_DETAIL';

export const reciveProjects = projects =>({
  type: RECIVE_PROJECTS,
  projects
});

export const reciveProjectDetail = project => ({
  type: RECEIVE_PROJECT_DETAIL,
  project
});

export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProjects(id)
  .then((projects) => dispatch(reciveProjectDetail(projects)))
);

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
  .then((projects) => dispatch(reciveProjects(projects)))
);
