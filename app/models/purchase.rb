class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :merch
  validates :price, presence: true, uniqueness:true
  validates :quantity, presence: true, uniqueness:true
end
