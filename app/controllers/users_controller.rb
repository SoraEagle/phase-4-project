class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorized, only: :create
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)

        if @user.save
            @token = encode_token({user_id: @user.id})
            render json: {user: @user, token: @token}, status: :created
        end
        # session[:user_id] = user.id
        # render json: user, status: :created
    end

    def update
        if @user.update(user_params)
            render json: @user
        else render json: @user.errors, status: :unprocessable_entity
    end

    def destroy
        @user.destroy
    end

    def get_current_user
        if logged_in?
            render json: current_user, status: :ok
        else
            render json: {message: ["Not Logged In"]}, status: :ok
        end
    end

    private
    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end