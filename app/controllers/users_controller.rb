class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    # before_action :authorize, only: :login
    # skip_before_action :authorize, only: [:create] 
        def email 
            @email = "prisonjoe55@gmail.com"
        end

        def index 
            user = User.all
            render json: user
        end

        def show
            user = User.find(session[:user_id])
            render json: user
        end
        
        def create
            user = User.create(user_params)
            render json: user
        end
    
        def login 
            if user_params[:email] == email 
                user = User.find_by(email:user_params[:email])
                if (user && user.authenticate(user_params[:password]))
                    session[:user_id] = user.id
                    render json: user
                else
                    render json: {error: ["incorrect user/pass"]}
                end
            else
                render json: {error: ['You dont have access here']}
            end
        end
        
        # def logout
        #     session.delete(:user_id)
        #     session[:user_id] = user.id
        # end
        
        private 
        
        def user_params 
            params.permit(:email, :password)
        end
    
        def render_not_found_response
            render json: {error: "User Not Found"}, status: :not_found
        end
    
    end