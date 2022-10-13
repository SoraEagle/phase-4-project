class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(username: params[:username])
    # byebug
    if user
      if user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else # If the password is invalid (or not entered):
        # byebug
        render json: {errors: ["Invalid password"]}, status: :unauthorized
      end
    else # If the username is invalid (or not entered):
      # byebug
      render json: {errors: ["Invalid username"]}, status: :unauthorized
      # search "how to generate error messages"
    end
  end

  # Currently, a custom error message cannot be made for the third test case (username AND password are invalid or weren't entered in), as
  # if user is nil, there can be no checks on the password.

  def destroy
    session.delete :user_id
    head :no_content
  end
end