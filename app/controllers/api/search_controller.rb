class Api::SearchController < ApplicationController
  def index
    @projects = Project.where('lower(title) Like ?', "%#{params[:data].downcase}%")
    render "api/projects/index"
  end
end
