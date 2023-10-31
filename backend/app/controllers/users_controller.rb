class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {success: "User created!"}
    else
      render json: {**@user.errors}, status: 400
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end
