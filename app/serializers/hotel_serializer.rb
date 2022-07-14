class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :city, :country
end
