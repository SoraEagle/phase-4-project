class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        render json: booking.all
    end

    def show
        render json: @booking
    end

    def create
        # 
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