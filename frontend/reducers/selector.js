import { values } from 'lodash'

export const allProjects = ({ projects }) => {
  return (values(projects));
};

export const allCatagories = (categories) => {
  return (values(categories));
}
