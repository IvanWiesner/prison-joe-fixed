class Merch < ApplicationRecord
    has_many :supporters, dependent: :destroy
    has_many :users, through: :supporters
    validates :name, presence: true, uniqueness:true
    # validates :image_url, presence: true
    # validates :price, presence: true
end
