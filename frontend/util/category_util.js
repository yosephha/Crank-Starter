export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: '/api/categories'
  })
);
