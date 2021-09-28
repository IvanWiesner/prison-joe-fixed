class SupportersController < ApplicationController
    wrap_parameters format: []

    def index 
        supporter = Supporter.all
        render json: supporter
    end
end
