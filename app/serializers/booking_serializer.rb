class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hotel

  # belongs_to :hotel
  # belongs_to :user
end