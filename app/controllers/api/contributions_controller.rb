class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    
    if @contribution.save(contribution_params)
      render json: @contribution
    else
      render json: @contributions.errors.full_messages, status: 442
    end
  end

  private

  def contribution_params
    params.require(:contribution).permit(:reward_id, :backer_id, :amount)
  end
end
