import merge from 'lodash/merge';
import { RECIVE_PROJECTS } from '../actions/project_actions';

const defaultState = {};

const ProjectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECIVE_PROJECTS:
      return merge({}, action.projects);
    default:
      return state;
  }
};

export default ProjectReducer;
