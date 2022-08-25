class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # before_action :set_user, only: [:show, :update, :destroy]

    # def index
    #     users = User.all
    #     render json: users
    # end

    def show
        render json: @current_user
    end

    def create
        byebug
        user = User.create!(user_params)
        # if user.save
            # @token = encode_token({user_id: user.id})
        session[:user_id] = user.id
        render json: {user: user}, status: :created
        console.log("User")
        # end
    end

    # def destroy
    #     user.destroy
    # end

    private
    # def set_user
    #     user = User.find(params[:id])
    # end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end