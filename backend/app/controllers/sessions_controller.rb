class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def index
    puts 'current user:', current_user
    if current_user
      render json: {success: 'session exists'}
    else
      render json: {error: 'session not found'}, status: 400
    end
  end
  
  def create
    @user = login(sessions_params[:email], sessions_params[:password])
    puts 'user:', @user
    if @user
      session[:user_id] = @user.id
      render json: {success: 'login successful'}
    else
      render json: {error: 'Could not login'}, status: 400
    end
  end

  private

  def sessions_params
    params.require(:session).permit(:email, :password)
  end
end
