class Hotel < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :users, through: :bookings

    validates :name, presence: true
    validates :company, presence: true
    validates :city, presence: true
    validates :country, presence: true
end