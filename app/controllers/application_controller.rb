class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    include ActionController::Cookies
     before_action :authorize
    
    def authorize
      render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
    # ix
  #   def current_user
  #     user = User.find_by(id: session[:user_id])
  #     user
  # end

  # def authorized_user  
  #     return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
  # end
  
  private 

  def record_not_found(error)
    render json: { error: "#{error.model} not found" }, status: 404
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end
end
    

# def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end
  # c
  #   class ApplicationController < ActionController::API
  #     rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  #     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
  #     before_action :authorized_user
  
  
  #     def current_user
  #         user = User.find_by(id: session[:user_id])
  #         user
  #     end
  
  #     def authorized_user  
  #         return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
  #     end
  
  #     private
  
  #     def render_unprocessable_entity(invalid)
  #         render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  #     end 
  
  #      def render_not_found(error)
  #         render json: {errors: {error.model => "Not Found"}}, status: :not_found
  #     end 
  # end