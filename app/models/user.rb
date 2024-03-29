class User < ApplicationRecord
    has_secure_password

    has_many :bookings
    has_many :hotels, through: :bookings

    validates :username, presence: true, uniqueness: true, length: {minimum: 8}
    validates :password, presence: true, length: {minimum: 3}
end