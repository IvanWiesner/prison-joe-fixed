class User < ApplicationRecord
    has_many :reviews, dependant: :destroy
    has_many :reviewed_merches, through: :reviews, source: :merches
    has_many :purchases, dependant: :destroy
    has_many :merches, through: :purchases
    validates :username, presence: true, uniqueness:true
    has_secure_password
end
