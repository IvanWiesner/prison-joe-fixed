class MerchesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    
        def index
            merch = Merch.all
            render json: merch
        end
    
        def show
            merch = Merch.find(params[:id])
            render json: merch
        end
    
        def create
            merch = Merch.create(merch_params)
            if merch.valid?
                render json: merch, status: :created
            else
                render json: {errors: merch.errors.full_messages}, status: :unprocessable_entity
            end
        end
    
        def destroy
            merch = Merch.find(params[:id])
            merch.destroy
            render json: {message: "merch deleted"}
        end
    
        private
        def merch_params
            params.permit(:name, :price, :image_url)
        end
    
        def render_not_found_response
            render json: {error: "merch Not Found"}, status: :not_found
        end
    
    end