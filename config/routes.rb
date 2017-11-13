Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :infos
    resources :categories do
      resources :walkthroughs do
        resources :steps
      end
    end
end


end
