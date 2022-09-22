class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            bookings = user.bookings
        else
            bookings = Booking.all
        end
        render json: bookings, include: :user
    end

    def show
        render json: @booking
    end

    def create
        # byebug
        booking = Booking.new(booking_params)
        if booking.save
            render json: booking, status: :created
        else
            render json: {errors: "Something went wrong!"}
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        # byebug
    end

    private
    def set_booking
        @booking = Booking.find(params[:id])
    end

    def booking_params
        params.require(:booking).permit(:id, :user_id, :hotel_id)
    end
end