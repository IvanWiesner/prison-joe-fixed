class Merch < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :reviewed_users, through: :reviews, source: :users
    has_many :purchases, dependent: :destroy
    has_many :users, through: :purchases
end
