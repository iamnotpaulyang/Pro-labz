class ProteinShakeIngredient < ApplicationRecord
  belongs_to :protein_shake
  belongs_to :ingredient
end
