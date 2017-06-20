import merge from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const defaultState ={
  errors: []
};
const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, {
        errors
      });
    case CLEAR_ERRORS:
      return defaultState;
    default:
      return state;
  }
};

export default errorReducer;
