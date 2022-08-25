class Hotel < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings

    # validates :name, presence: true, uniqueness: true
    # validates :company, presence: true
    # validates :city, presence: true
    # validates :country, presence: true
end