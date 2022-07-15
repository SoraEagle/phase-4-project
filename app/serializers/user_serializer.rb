class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :bookings
  has_many :hotels, through: :bookings
end