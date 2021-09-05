class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :reviewed_merches, through: :reviews, source: :merches
    has_many :purchases, dependent: :destroy
    has_many :merches, through: :purchases
    validates :username, presence: true, uniqueness:true
    validates :email, presence: true, uniqueness:true
    has_secure_password
end
