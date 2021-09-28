class User < ApplicationRecord
    has_many :supporters, dependent: :destroy
    has_many :merches, through: :supporters
    validates :email, presence: true, uniqueness:true
    has_secure_password
end
