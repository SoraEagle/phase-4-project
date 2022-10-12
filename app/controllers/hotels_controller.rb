class HotelsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    def index
        render json: Hotel.all
    end

    def create
        hotel = Hotel.new(hotel_params)
        if hotel.save
                render json: hotel, status: :created
        else
            render json: {errors: "Something went wrong!"}
        end
    end

    private
    def hotel_params
        params.require(:hotel).permit(:name, :city, :country, :company)
    end
end

# Make sure everything works properly!