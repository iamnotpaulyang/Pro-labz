class ProteinShakeIngredientsController < ApplicationController
skip_before_action :authorize, only: [:index, :create, :show, :update, :destroy]
    
    def index
        render json: ProteinShakeIngredient.all, status: :ok 
    end

    def show
        ProteinShakeIngredient.find(params[:id])
        render json: find_protein_shake_ingredients, status: :ok
    end

    def create
        protein_shake_ingredients = ProteinShakeIngredients.create!(protein_shake_ingredients_params)
        render json: protein_shake_ingredients, status: :created
    end

    def update
        protein_shake_ingredients = find_protein_shake_ingredients
        protein_shake_ingredients.update(protein_shake_ingredients_params.permit)
        render json: protein_shake_ingredients, status: :accepted
    end

    def destroy
        find_protein_shake_ingredients.destroy 
        head :no_content
    end

    private

    def find_protein_shake_ingredients
        ProteinShakeIngredients.find_by(id: params[:id])
    end

    def protein_shake_ingredients_params
        params.permit(:protein_shake_id, :ingredient_id)
    end
end