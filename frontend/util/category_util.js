export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: '/api/categories'
  })
);

export const fetchSelectedProjects = (category_id) => {
  debugger
  return (
    $.ajax({
      method: 'GET',
      url: `/api/categories`,
      data: { category: category_id  }
    })
  );
};

export const fetchCategoryProjects = category_id => (
  $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: {category: category_id}
  })
);
