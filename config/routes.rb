# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    devise_for :users,
            path: '',
            path_names: {
                sign_in: 'login',
                sign_out: 'logout',
                registration: 'signup'
            },
            controllers: {
                sessions: 'sessions',
                registrations: 'registrations'
            }
    resources :orders
    resources :items
    resources :menus
  end
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
