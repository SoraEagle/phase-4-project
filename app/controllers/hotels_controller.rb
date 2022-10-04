class HotelsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        render json: Hotel.all
    end

    def show
        render json: @hotel
    end

    def create
        hotel = Hotel.new(hotel_params)
        if hotel.save
                render json: hotel, status: :created
        else
            render json: {errors: "Something went wrong!"}
        end
    end

    def update
        hotels = Hotel.find(params[:id])
        hotels.update(name: params[:name])
        render json: hotels
    end

    def destroy
        set_hotel
        @hotel.destroy
    end

    private
    def set_hotel
        @hotel = Hotel.find(params[:id])
    end

    def hotel_params
        params.require(:hotel).permit(:name, :city, :country, :company)
    end
end