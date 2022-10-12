class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        if params[:user_id]
            bookings = set_user.bookings
        else
            bookings = Booking.all
        end
        render json: bookings
    end

    def create
        booking = set_user.bookings.new(booking_params)
        if booking.save
            render json: booking, status: :created
        else
            render json: {errors: "Something went wrong!"}, status: :unprocessable_entity
        end
    end

    def destroy
        @booking = set_user.bookings.find(params[:id])
        @booking.destroy
    end

    private
    def set_user
        return user = User.find(session[:user_id])
    end

    def booking_params
        params.require(:booking).permit(:id, :hotel_id, :date)
    end
end