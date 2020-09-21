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

  def logged_in
    byebug
    @current_user = User.find(session[:user_id]) if session[:user_id]
    if @current_user
      render json: { user: @current_user.email, loggedIn: true }
    else
      render json: { loggedIn: false }
    end
  end

  def logout
    reset_session
    puts 'deleted'
    render json: { status: 200, loggedIn: false }
  end
end
