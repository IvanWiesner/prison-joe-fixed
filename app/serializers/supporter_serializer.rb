class SupporterSerializer < ActiveModel::Serializer
  attributes :id, :name, :value
  belongs_to :user
  belongs_to :merch
end
