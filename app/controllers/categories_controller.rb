class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        render json: Category.all, status: :ok
    end

end
