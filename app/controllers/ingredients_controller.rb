class IngredientsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :destroy]

    def index
        render json: Ingredient.all, status: :ok
    end

    def show
        Ingredient.find({user_id: params[:id]})
        render json: find_ingredient, status: :ok
    end

    def destroy #?
        find_ingredient.destroy
        head :no_content
    end



    private
    
    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end

    def ingredient_params
        params.permit(:name, :image)
    end

end
