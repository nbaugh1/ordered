# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end
end
