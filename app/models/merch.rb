class Merch < ApplicationRecord
    has_many :purchases, dependent: :destroy
    has_many :users, through: :purchases
    validates :name, presence: true, uniqueness:true
    # validates :image_url, presence: true
    # validates :price, presence: true
end
