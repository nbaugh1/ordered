# frozen_string_literal: true

Rails.application.routes.draw do
  resources :cart_items
  resources :carts
  scope :api do
    post :signup, to: 'users#create'
    post :login, to: 'users#login'
    resources :orders
    resources :items
    resources :menus
    get :auto_login, to: 'api#auto_login'
    delete :logout, to: 'sessions#logout'
  end
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
