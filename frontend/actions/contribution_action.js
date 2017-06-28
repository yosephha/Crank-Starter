import * as APIUtil from '../util/contribution_util';

export const RECIVE_CONTRIBUTION = 'RECIVE_CONTRIBUTION';

export const reciveContribution = contribution => ({
  type: RECIVE_CONTRIBUTION,
  contribution
})

export const createContribution = (contributions) => dispatch => {
  return (
    APIUtil.createContribution(contributions)
    .then( (contribution) => {
      return dispatch(reciveContribution(contribution));
      }

    )
  );
}
