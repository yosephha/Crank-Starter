import * as APIUtil from '../util/category_util';

export const RECIVE_CATEGORIES = "RECIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const reciveCategories = categories => ({
  type: RECIVE_CATEGORIES,
  categories
});

export const receiveCategory = projects => {
  return {
    type: RECEIVE_CATEGORY,
    projects
  };
};

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories()
  .then((categories) => dispatch(reciveCategories(categories)))
);
