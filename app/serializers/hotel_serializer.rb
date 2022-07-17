class HotelSerializer < ActiveModel::Serializer
  attributes :name, :company, :city, :country

  has_many :bookings
  has_many :users, through: :bookings
end