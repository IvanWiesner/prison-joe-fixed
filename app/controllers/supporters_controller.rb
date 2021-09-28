class SupportersController < ApplicationController
    def index 
        supporter = Supporter.all
        render json: supporter
    end
end
