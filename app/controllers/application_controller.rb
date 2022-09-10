class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  # def encode_token(payload)
  #   JWT.encode(payload, ENV['JWT_SECRET'])
  # end

  # def auth_header
  #   request.headers['Authorization']
  # end

  # def decoded_token
  #   if auth_header
  #     token = auth_header.split(' ')[1]
  #     # headers: {'Authorization': 'Bearer <token>'}
  #     begin
  #       JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
  #       # JWT.decode => [{"beef"=>"steak"}, {"alg"=>"HS256"}]
  #     rescue JWT::DecodeError
  #       nil
  #     end
  #   end
  # end

  # def current_user
  #   if decoded_token
  #     # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
  #     # or nil if we can't decode the token
  #     user_id = decoded_token[0]['user_id']
  #   end
  # end

  # def logged_in?
  #   !!current_user
  # end

  private
  def authorize
    # byebug
    @current_user = User.find_by(id: session[:user_id])
    # byebug
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

  # def authorized
  #   render json: {message: "Please log in"}, status: :unauthorized unless logged_in?
  # end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end