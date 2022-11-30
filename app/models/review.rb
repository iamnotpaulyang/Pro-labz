class Review < ApplicationRecord
  belongs_to :user
  belongs_to :protein_shake
end
