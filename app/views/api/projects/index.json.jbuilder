@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.description project.description
    json.creator project.creator.username
    json.category_id project.category_id
    json.end_date project.end_date
    json.funding_goal project.funding_goal
    json.project_img asset_path(project.project_img.url)
  end
end
