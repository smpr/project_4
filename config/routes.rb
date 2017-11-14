Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :infos
    resources :meetups
    resources :categories do
      resources :walkthroughs do
        resources :steps
      end
    end
    get "meetupapi", to: "meetupap#index"
    get "meetupapi", to: "meetupap#show"
  end


end
