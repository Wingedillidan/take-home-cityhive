Rails.application.routes.draw do
  resources :messages, only: [:create, :destroy, :index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:create]
  resources :sessions, only: [:create, :destroy, :index]
end
