# module CurrentUserConcern
#     # extend
#     extend ActiveSupport::Concern

#     included do 
#         before_action :set_made_user
#     end

#     def set_made_user
#         if session[:user_id]
#             @current_user = User.find(session[:user_id])
#         end
#     end
# end