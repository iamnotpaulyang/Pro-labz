class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :protein_shakes, through: :reviews
    
    validates :username, presence: true
    validates :password, length: { minimum: 4 }

end
