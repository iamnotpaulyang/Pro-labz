class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :protein_shake_id
  has_one :user
  has_one :protein_shake
end
