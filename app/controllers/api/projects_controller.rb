class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:rewards).all
  end

  def create
    debugger
    @project = Project.new(project_params)
    @project.creator = current_user
    debugger
     if @project.save
       rewards = params[:project][:reward].each do |key, value|
         params[:project][:reward][key][:project_id]=@project.id
       end
        success = rewards.each do |key, reward|
          Reward.new(
            title: reward[:title],
            description: reward[:description],
            amount: reward[:amount].to_i,
            project_id: reward[:project_id]
          ).save
        end

        if success.include?(false)
          render json: "error creating rewards", status: 500
        else
          render "api/projects/show"
        end
     else
       render json: @project.errors.full_messages, status: 422
     end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = current_user.projects.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
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
      :creator_id, :category_id, :project_img, :reward => []
    )
  end
end
