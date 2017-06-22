@categories.each do |category|
  json.set! category.id do
    json.name category.name
  end
end
