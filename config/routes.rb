Rails.application.routes.draw do
  resources :ingredients, only: [:index, :create, :show]
  resources :protein_shake_ingredients
  resources :categories, only: [:index]
  resources :users, only: [:index, :show, :create]
  resources :protein_shakes
  resources :ingredients, only: [:index, :show, :destroy]
  resources :reviews

  post '/Login', to: 'sessions#create'
  post '/SignUp', to: 'sessions#create'
  delete '/Logout', to: 'sessions#destroy'
  # get "/me", to: "users#show"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  # get '/hello', to: 'application#hello_world'
end
