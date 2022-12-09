class ProteinShakeIngredientSerializer < ActiveModel::Serializer
  attributes :id
  has_one :protein_shake
  has_one :ingredient

end
