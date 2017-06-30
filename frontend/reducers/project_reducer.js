import merge from 'lodash/merge';
import { RECIVE_PROJECTS, RECEIVE_PROJECT_DETAIL, REMOVE_PROJECT } from '../actions/project_actions';

const defaultState = {};

const ProjectReducer = (state = defaultState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT_DETAIL:
      const newproject = {[action.project.id]: action.project};
      return merge({}, state, newproject);
    case REMOVE_PROJECT:
      const nextState = merge({}, state);
      delete nextState[action.project.id];
      return nextState;
    default:
      return state;
  }
};

export default ProjectReducer;
