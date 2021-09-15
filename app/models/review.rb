class Review < ApplicationRecord
  validates :comment, presence: true, uniqueness:true
end
