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

export const createProject = project => (
  $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project }
  })
);

export const deleteProject = project => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${project.id}`
  })
);
