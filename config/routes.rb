Rails.application.routes.draw do
  resources :sessions
  resources :supporters, only: [:index]
  resources :merches, only: [:index, :create, :show, :destroy]
  resources :reviews, only: [:index, :create, :show, :destroy]
  resources :users, only: [:index]
  # resources :supporters, only: [index, :create, :show, :destroy, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "users#show"
  post "/login", to: "users#login"
  delete '/logout', to: 'sessions#destroy'
  get "*path", to: "fallback#index", constraints: ->(req) do !req.xhr? && req.format.html?
  end
end
