class SessionsController < ApplicationController
        skip_before_action :authorize, only: [:create, :index]
    
        def index
            cookies[:cookies_hi] ||= 'test cookie'
            session[:session_hi] ||= 'test session'
            render json: {cookies:cookies.to_hash, session:session}
        end
        
        def destroy
            session.delete :user_id
        end
end
