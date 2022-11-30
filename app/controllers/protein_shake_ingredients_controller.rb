class ProteinShakeIngredientsController < ApplicationController
    def destroy
        find_ingredient.destroy
        head :no_content
    end
end
#FULL CRUD