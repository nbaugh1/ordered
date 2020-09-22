# frozen_string_literal: true

class ApiController < ActionController::API
  include ::ActionController::Cookies

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      Jsonwebtoken.decode(token)
    end
  end

  def session_user
    decoded_hash = decoded_token
    unless decoded_hash.empty?
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
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
