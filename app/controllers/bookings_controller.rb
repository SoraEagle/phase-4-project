class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        if params[:user_id]
            render json: current_user.bookings, include: :hotel
        end
    end

    def show
        render json: @booking
    end

    def create
        booking = Booking.new(booking_params)
        if booking.save
            render json: booking, status: :created
        else
            render json: {errors: "Something went wrong!"}
        end
    end

    def destroy
        # byebug
        set_booking
        @booking.destroy
    end

    private
    def set_booking
        @booking = booking.find(params[:id])
    end

    def booking_params
        params.require(:booking).permit(:hotel_id, :user_id)
    end
end