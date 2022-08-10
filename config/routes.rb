Rails.application.routes.draw do
  namespace :api do
    resources :hotels, only: [:index, :show]
    get 'sessions/create'
    get 'sessions/destroy'
    post "/login", to: "sessions#create"
    delete "/logout", to: 'sessions#destroy'
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end