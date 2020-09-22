# frozen_string_literal: true

class ApiController < ActionController::API
  include ::ActionController::Cookies

  def auth_header
    cookies.signed[:jwt]
  end

  def decoded_token
    Jsonwebtoken.decode(auth_header) if auth_header
  end

  def session_user
    decoded_hash = decoded_token
    if !Jsonwebtoken.expired(decoded_hash[0]) && Jsonwebtoken.valid_payload(decoded_hash[0])
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    else
      render json: { errors: 'Not logged in' }, status: :unauthorized
    end
  end

  def logged_in?
    !!session_user
  end

  def auto_login
    if session_user
      render json: { email: session_user.email, loggedIn: true }, status: :ok
    else
      render json: { errors: 'Not logged in' }, status: :unauthorized
    end
  end

  def require_login
    unless logged_in?
      render json: { message: 'Please Login' }, status: :unauthorized
    end
  end
end
