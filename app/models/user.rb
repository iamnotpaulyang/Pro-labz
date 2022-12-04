class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :protein_shakes, through: :reviews
    
    validates :username, presence: true
    validates :password, length: { minimum: 4 }
    # validates :password, confirmation: true, length {4..15}
    #validates :password, length: { minimum: 6, maximum: 20 }
end
