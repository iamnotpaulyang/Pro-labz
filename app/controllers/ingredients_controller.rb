class IngredientsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    def index
        render json: Ingredient.all, status: :ok
    end

    def show
        Ingredient.find(params[:id])
        render json: find_ingredient, status: :ok
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        render json: ingredient, status: :created
    end

    private
    
    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end

    def ingredient_params
        params.permit(:name, :image)
    end

end
