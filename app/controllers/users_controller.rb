class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # before_action :set_user, only: [:show, :update, :destroy]

    # def index
    #     @users = User.all
    #     render json: @users
    # end

    def show
        render json: @current_user
    end

    def create
        byebug
        @user = User.create!(user_params)
        # if @user.save
            # @token = encode_token({user_id: @user.id})
        session[:user_id] = @user.id
        render json: {user: @user}, status: :created
        console.log("User")
        # end
    end

    # def update
    #     if @user.update(user_params)
    #         render json: @user
    #     else render json: @user.errors, status: :unprocessable_entity
    #     end
    # end

    # def destroy
    #     @user.destroy
    # end

    # def get_current_user
    #     if logged_in?
    #         render json: current_user, status: :ok
    #     else
    #         render json: {message: ["Not Logged In"]}, status: :ok
    #     end
    # end

    private
    # def set_user
    #     @user = User.find(params[:id])
    # end

    def user_params
        params.permit(:username, :password)
    end
end