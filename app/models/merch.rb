class Merch < ApplicationRecord
    has_many :reviews, dependant: :destroy
    has_many :reviewed_users, through: :reviews, source: :users
    has_many :purchases, dependant: :destroy
    has_many :users, through: :purchases
end
