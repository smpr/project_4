class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?
  include DeviseTokenAuth::Concerns::SetUserByToken
  include CanCan::ControllerAdditions
  rescue_from CanCan::AccessDenied do |exception|
    render status: :unauthorized
  end
  protected
  
    def configure_permitted_parameters
      attributes = [:name, :surname, :username, :email, :avatar]
      devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
      devise_parameter_sanitizer.permit(:account_update, keys: attributes)
    end
end
