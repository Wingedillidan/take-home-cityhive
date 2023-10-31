class ApplicationController < ActionController::Base
  before_action :require_login
  skip_before_action :verify_authenticity_token

  def not_authenticated
    render json: {error: 'You must be logged in to do this action.'}, status: 403
  end
end
