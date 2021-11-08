class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token
    include ActionController::Cookies
    before_action :authorize
    
    def authorize
      @current_user = User.find_by(id:session[:user_id])
      render json: {error:["Not authorized"]}, status: :unauthorized unless @current_user
    end
  end
