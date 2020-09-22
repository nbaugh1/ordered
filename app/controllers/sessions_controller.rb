# frozen_string_literal: true

class SessionsController < ApiController
  def create
    user = User.find_by(email: params[:user][:email])
    if user
      session[:user_id] = user.id
      render json: { user: user.email, loggedIn: true }, status: ok
    else
      render json: { status: 401 }
    end
  end

  def logout
    reset_session
    cookies.delete :jwt
    puts 'User logged out'
    render json: { status: 200, loggedIn: false }
  end
end
