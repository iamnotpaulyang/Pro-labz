class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  
    def record_not_found(obj)
      render json: { error: "#{obj.model} not found" }, status: 404
    end
  
    def record_invalid(obj)
      render json: { errors: obj.record.errors.full_messages }, status: 422
    end
    
    def authorize
      # @user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
  
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end