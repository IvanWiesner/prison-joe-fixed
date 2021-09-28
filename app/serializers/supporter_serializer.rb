class SupporterSerializer < ActiveModel::Serializer
  attributes :id, :name, :value
  belongs_to :merches
  belongs_to :users
end
