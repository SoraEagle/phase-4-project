class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :city, :country

  has_many :bookings
    has_many :users, through: :bookings
end