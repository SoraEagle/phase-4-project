class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        if params[:user_id]
            # Need to change to session hash
            # user = User.find(params[:user_id])
            bookings = set_user.bookings
        else
            bookings = Booking.all
        end
        render json: bookings
    end

    def create
        # I should be using the user in the session hash
        booking = set_user.bookings.new(booking_params)
        if booking.save
            render json: booking, status: :created
        else
            render json: {errors: "Something went wrong!"}, status: :unprocessable_entity
        end
    end

    def destroy
        # Find the user
        # Instead of hitting model, user.bookings
        @booking = set_user.bookings.find(params[:id])
        @booking.destroy
    end

    private
    def set_user # Method that finds the user in the session hash
        return user = User.find(session[:user_id])
    end

    def booking_params # Get rid of user_id
        params.require(:booking).permit(:id, :hotel_id, :date)
    end
end
# Make sure everything works properly!