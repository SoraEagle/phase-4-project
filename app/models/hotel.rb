class Hotel < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings

    # validates :name, precense: true, uniqueness: true
    # validates :company, precense: true
    # validates :city, precense: true
    # validates :country, precense: true
end