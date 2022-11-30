class ProteinShakesController < ApplicationController
        skip_before_action :authorize, only: [:index, :create, :show, :destroy]
        
        def index
            render json: ProteinShake.all, status: :ok 
        end
    
        def show
            ProteinShake.find({user_id: params[:id]})
            render json: find_protein_shake, status: :ok
        end
    
        def create
            protein_shake = ProteinShake.create!(protein_shake_params)
            render json: protein_shake, status: :created
        end
    
        def update
            protein_shake = find_protein_shake
            protein_shake.update(protein_shake_params)
            render json: protein_shake, status: :accepted
        end
    
        def destroy
            find_protein_shake.destroy #wanted to originally delete ingredient off of shake or shake itself? 
            head :no_content
        end
    
        private
    
        def find_protein_shake
            ProteinShake.find_by(id: params[:id])
        end
    
        def protein_shake_params #:ingredients?
            params.permit(:name, :image)
        end
    end
    