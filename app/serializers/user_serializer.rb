class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :bookings
  has_many :hotels, through: :bookings
end