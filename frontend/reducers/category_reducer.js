import { RECIVE_CATEGORIES } from '../actions/category_action';
import { merge } from 'lodash';

const defaultState = {}
const CategoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECIVE_CATEGORIES:
     return merge({}, action.categories);
    default:
      return state;
  }
};

export default CategoryReducer;
