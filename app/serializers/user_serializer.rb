class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  has_many :reviews
  has_many :purchases
end
