class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(username: params[:username])
    if user
      if user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else # If the password is invalid (or not entered):
        render json: {errors: ["Invalid password"]}, status: :unauthorized
      end
    else # If the username is invalid (or not entered):
      render json: {errors: ["Invalid username"]}, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end