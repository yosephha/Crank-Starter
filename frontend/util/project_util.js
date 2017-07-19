export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchProjectDetail = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const createProject =(project) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/projects',
      data: project,
      contentType: false,
      processData: false
    })
  );
}

export const deleteProject = project => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${project.id}`
  })
);

export const updateProject = (id, project) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/projects/${id}`,
      data: project,
      contentType: false,
      processData: false
    })
  );
};
