class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :date, :hotel

  # belongs_to :hotel
  # belongs_to :user
end