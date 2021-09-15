class User < ApplicationRecord
    has_many :purchases, dependent: :destroy
    has_many :merches, through: :purchases
    validates :email, presence: true, uniqueness:true
    has_secure_password
end
