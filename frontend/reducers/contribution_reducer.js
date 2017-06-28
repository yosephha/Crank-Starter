import merge from 'lodash/merge';
import { RECIVE_CONTRIBUTION } from '../actions/contribution_action';

const defaultState = {};

const ContributionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_CONTRIBUTION:
      const newContribution = merge({}, state, action.contribution);
      return newContribution;
    default:
      return state;
  }
};

export default ContributionReducer;
