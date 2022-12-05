class ProteinShakeIngredientSerializer < ActiveModel::Serializer
  attributes :id
  # belongs_to: :ingredient
  # belongs_to: :protein_shake

  
  has_one :protein_shake
  has_one :ingredient
end
