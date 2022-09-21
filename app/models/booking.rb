class Booking < ApplicationRecord
    belongs_to :hotel
    belongs_to :user

    # Create validations
    validates :hotel_id, presence: true
    validates :user_id, presence: true
end