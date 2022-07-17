class UserSerializer < ActiveModel::Serializer
  attributes :username

  has_many :bookings
  has_many :hotels, through: :bookings
end