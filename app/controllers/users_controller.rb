# frozen_string_literal: true

class UsersController < ApiController
  def create
    user = User.new(user_params)

    if user.save
      render json: { status: 'User created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def login
    user = User.find_by(email: params[:user][:email])
    if user&.authenticate(params[:user][:password])
      auth_token = Jsonwebtoken.encode({ user_id: user.id })
      cookies.signed[:jwt] = { value: auth_token, httponly: true }
      render json: { user: user.email, loggedIn: true }, status: :ok
    else
      render json: { error: 'Invalid username / password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
