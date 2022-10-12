class BookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :hotel

  # belongs_to :hotel
  # belongs_to :user
end