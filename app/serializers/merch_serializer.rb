class MerchSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price
  has_many :purchases
  has_many :reviews
end
