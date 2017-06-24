@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.description project.description
    json.creator project.creator.username
    json.category_id project.category_id
    json.category project.category
    json.end_date project.end_date
    json.funding_goal project.funding_goal
    json.project_img asset_path(project.project_img.url)
    json.funded project.rewards.map { |reward|
       reward.contributions.count * reward.amount
    }.reduce(:+)
    json.num_backers project.rewards.map { |reward|
       reward.contributions.count
    }.reduce(:+)
    json.rewards project.rewards do |reward|
      json.amount reward.amount
      json.description reward.description
      json.contributions reward.contributions
      json.backers reward.backers
      json.project reward.project
    end

  end
end
