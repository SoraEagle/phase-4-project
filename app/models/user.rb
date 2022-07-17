class User < ApplicationRecord
    has_secure_password

    has_many :bookings
    has_many :hotels, through: :bookings

    validates :username, precense: true, uniqueness: true
    validates :password, precense; true, uniqueness: true, length: {minimum: 12}
end