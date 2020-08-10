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
      render json: { auth_token: auth_token }, status: :ok
    else
      render json: { error: 'Invalid username / password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
