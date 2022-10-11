class Booking < ApplicationRecord
    belongs_to :hotel
    belongs_to :user

    validates :hotel_id, presence: true
    validates :user_id, presence: true
    # validates :date, presence: true
end