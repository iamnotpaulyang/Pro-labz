class ProteinShakeIngredientsController < ApplicationController
skip_before_action :authorize, only: [:index, :create, :show, :update, :destroy]
    
    def index
        render json: ProteinShakeIngredient.all, status: :ok 
    end

    def show
        ProteinShakeIngredient.find(params[:id])
        render json: find_protein_shake_ingredient, status: :ok
    end

    def create
        protein_shake_ingredient = ProteinShakeIngredient.insert_all(protein_shake_ingredient_params)
        render json: protein_shake_ingredient, status: :created
    end

    def update
        protein_shake_ingredient = find_protein_shake_ingredients
        protein_shake_ingredient.update(protein_shake_ingredient_params.permit)
        render json: protein_shake_ingredient, status: :accepted
    end

    def destroy
        find_protein_shake_ingredient.destroy 
        head :no_content
    end

    private

    def find_protein_shake_ingredient
        ProteinShakeIngredient.find_by(id: params[:id])
    end

    def protein_shake_ingredient_params
        params.permit(:protein_shake_id, :ingredient_id)
    end
end

