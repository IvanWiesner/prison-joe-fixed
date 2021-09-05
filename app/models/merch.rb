class Merch < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :reviewed_users, through: :reviews, source: :users
    has_many :purchases, dependent: :destroy
    has_many :users, through: :purchases
    validates :name, presence: true, uniqueness:true
    validates :image_url, presence: true, uniqueness:true
    validates :price, presence: true, uniqueness:true
end
