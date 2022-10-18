class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        bookings = set_user.bookings
        render json: bookings
    end

    def create
        booking = set_user.bookings.new(booking_params)
        if(booking.date)
            if booking.save
                render json: booking, status: :created
            else
                render json: {errors: booking.errors.full_messages}, status: :unauthorized
            end
        else
            render json: {errors: booking.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        booking = set_user.bookings.find(params[:id])
        booking.update(date: params[:date])
        render json: booking
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