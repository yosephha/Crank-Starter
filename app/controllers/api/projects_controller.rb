class Api::ProjectsController < ApplicationController
  def index
    if params[:category]
      @projects = Project.where(category_id: params[:category])
    else
      @projects = Project.includes(:rewards, :category).all
    end
  end

  def create
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])
    @project = Project.new(project_params)
    @project.creator = current_user

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find(params[:id])
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])

    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render json: @project
  end

  private
  def project_params
    params.require(:project).permit(
      :title, :website, :description,
      :end_date, :funding_goal, :details,
      :creator_id, :category_id, :project_img,
      rewards_attributes: [:title, :description, :amount]
    )
  end
end
