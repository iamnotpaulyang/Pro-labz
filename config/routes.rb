Rails.application.routes.draw do
  resources :ingredients, only: [:index, :create, :show]
  resources :protein_shake_ingredients
  resources :categories, only: [:index]
  resources :users, only: [:index, :show, :create]
  resources :protein_shakes, only: [:index, :show, :create]
  resources :ingredients, only: [:index, :show, :destroy]
  resources :reviews

  post '/login', to: 'sessions#create'
  post '/signup', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # get "/me", to: "users#show"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  # get '/hello', to: 'application#hello_world'
end
