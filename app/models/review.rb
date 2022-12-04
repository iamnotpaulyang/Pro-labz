class Review < ApplicationRecord
  belongs_to :user
  belongs_to :protein_shake

  # validates :description, length: { maximum: 100}
end
