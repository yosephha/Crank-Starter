import { RECIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_action';
import { merge } from 'lodash';

const defaultState = {}
const CategoryReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_CATEGORIES:
      return merge({}, action.categories);
    // case RECEIVE_CATEGORY:
    //   return action.projects;
    default:
      return state;
  }
};

export default CategoryReducer;
