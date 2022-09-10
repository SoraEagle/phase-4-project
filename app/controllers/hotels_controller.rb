class HotelsController < ApplicationController
    # skip_before_action :set_hotel, only: [:show]
    def index
        # byebug
        @hotels = Hotel.all
        render json: @hotels
    end

    def show
        render json: @hotel
    end

    private
    def set_hotel
        @hotel = Hotel.find(params[:id])
    end

    def hotel_params
        params.require(:hotel).permit(:name, :city, :country)
    end
end