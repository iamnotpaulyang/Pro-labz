class UsersController < ApplicationController
skip_before_action :authorize, only: [:index, :create]
   
    def index
        render json: User.all, status: :ok
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        render json: @current_user, status: :ok
    end   

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password)
    end
end

