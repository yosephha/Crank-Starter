export const fetchSearch = (data) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/search',
      data
    })
  );
}
