import * as APIUtil from '../util/search_util';

export const RECIVE_SEARCH = 'RECIVE_SEARCH';

export const reciveSearch = (projects) => ({
  type: RECIVE_SEARCH,
  projects
})

export const fetchSearch = (data) => dispatch => (
  APIUtil.fetchSearch(data)
  .then((projects) => dispatch(reciveSearch(projects)))
);
