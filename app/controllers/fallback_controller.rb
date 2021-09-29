class FallbackController < ApplicationController
    # def index
    #     render file: 'public/index.html'
    #   end
    include ActionController::MimeResponds

    def index
        respond_to do |format|
            format.html { render body: Rails.root.join('public/index.html').read }
        end
    end
end
