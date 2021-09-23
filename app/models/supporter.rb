class Supporter < ApplicationRecord
    belongs_to :user
    belongs_to :merch
    validates :name, presence: true, uniqueness:true
    validates :value, presence: true, uniqueness:true
end
