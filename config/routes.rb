Rails.application.routes.draw do
  # allows devise to stay hidden
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :infos
    resources :meetups
    resources :categories do
      resources :notes
      resources :walkthroughs do
        resources :steps
      end
    end
    # custom routes that go to a specific place in the controllers to make the api call a little more specific
    get "meetupapi/:search", to: "meetupap#index"
    get "meetupapi", to: "meetupap#show"
    get "googleapi", to: "google_api#show"
  end


end
