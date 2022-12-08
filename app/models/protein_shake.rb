class ProteinShake < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    has_many :protein_shake_ingredients
    has_many :ingredients, through: :protein_shake_ingredients, dependent: :destroy
    
    def add_ingredients_to_shake(recipe)
        recipe.each do |item|
            self.protein_shake_ingredients << item
        end
 end
end
