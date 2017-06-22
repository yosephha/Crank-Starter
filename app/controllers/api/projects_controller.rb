class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  private
  def project_params
    params.require(:project).permit(:title, :url, :description,
      :main_image_url, :end_date, :funding_goal, :details,
      :creator_id, :category, :project_img)
  end
end
