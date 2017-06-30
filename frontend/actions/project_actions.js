import * as APIUtil from '../util/project_util';
import * as APIUtilCat from '../util/category_util.js';
import { receiveErrors } from './error_actions';
export const RECIVE_PROJECTS = 'RECIVE_PROJECTS';
export const RECEIVE_PROJECT_DETAIL = 'RECEIVE_PROJECT_DETAIL';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const reciveProjects = projects =>({
  type: RECIVE_PROJECTS,
  projects
});

export const reciveProjectDetail = project => ({
  type: RECEIVE_PROJECT_DETAIL,
  project
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const createProject = (project) => (dispatch) => {
  return (
    APIUtil.createProject(project)
    .then( (project) => dispatch(reciveProjectDetail(project)))
  )
};

export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProjectDetail(id)
  .then((projects) => dispatch(reciveProjectDetail(projects)))
);

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
  .then((projects) => dispatch(reciveProjects(projects)))
);

export const updateProject = project => dispatch => (
  APIUtil.updateProject(project)
    .then(res => {
      dispatch(receiveProjectDetail(res));
      return res;
    }).fail(err => dispatch(receiveProjectErrors(err.responseJSON)))
);

export const deleteProject = project => dispatch => {
  return (
    APIUtil.deleteProject(project)
      .then(res => dispatch(removeProject(res)))
  );
}

export const fetchCategoryProjects = category_id => dispatch => (
  APIUtilCat.fetchCategoryProjects(category_id)
    .then(res => dispatch(reciveProjects(res)))
);
