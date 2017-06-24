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
  debugger
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
// export const createProject = (formData, project) => (
//   $.ajax({
//     method: "POST",
//     url: "/api/projects",
//     dataType: "json",
//     contentType: false,
//     processData: false,
//     data: formData,
//     success: function() {
//       callback();
//     }
//   })
// );

export const deleteProject = project => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${project.id}`
  })
);
