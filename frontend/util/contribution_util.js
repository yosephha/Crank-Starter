export const createContribution = contribution => (
  $.ajax({
    method: 'POST',
    url: `/api/projects/${contribution.backer_id}/contributions`,
    data: { contribution }
  })
);
