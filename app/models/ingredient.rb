class Ingredient < ApplicationRecord
  belongs_to :category
  has_many :protein_shake_ingredients
  has_many :protein_shakes, through: :protein_shake_ingredients
end
