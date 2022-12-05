class ProteinShakeSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :image
  has_many :reviews
  has_many :ingredients
end
