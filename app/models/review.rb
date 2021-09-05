class Review < ApplicationRecord
  belongs_to :user
  belongs_to :merch
  validates :comment, presence: true, uniqueness:true
end
