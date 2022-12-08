class ProteinShakeIngredientSerializer < ActiveModel::Serializer
  attributes :id
  has_one :protein_shake
  has_one :ingredient

  # belongs_to: :ingredient
  # belongs_to: :protein_shake
end
