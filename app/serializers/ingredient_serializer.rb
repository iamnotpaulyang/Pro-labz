class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_one :category
end
