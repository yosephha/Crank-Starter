class Api::ProjectsController < ApplicationController
  def index
    @project = Project.all
  end

  private
  def project_params
    params.require(:project).permit(:title, :url, :description,
      :main_image_url, :end_date, :funding_goal, :details,
      :creator_id, :category)
  end
end
