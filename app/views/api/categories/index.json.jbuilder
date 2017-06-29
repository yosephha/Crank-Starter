@categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.name category.name
    json.number_of_projects category.projects.count;
  end
end
