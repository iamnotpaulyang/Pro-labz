class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show, :update, :destroy]
        
    def index
        render json: Review.all, status: :ok 
    end
    
    def show
        Review.find(params[:id])
        render json: find_review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update(params.permit(:description))
        render json: review, status: :accepted
    end

    def destroy
        find_review.destroy 
        head :no_content
    end

    private

    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
        params.permit(:description, :user_id, :protein_shake_id)
    end
end