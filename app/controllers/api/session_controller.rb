class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Ivalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private

  def user_params
    params.requre(:user).permit(:username, :password)
  end
end
