class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # before_action :set_user, only: [:show, :update, :destroy]
    # def index
    #     users = User.all
    #     render json: users
    # end

    def show
        # byebug
        render json: current_user
    end

    def create
        user = User.new(user_params)
        if user.save 
        # byebug
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: "Invalid username or password"}
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end