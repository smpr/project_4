Rails.application.routes.draw do
namespace :api do
  resources :categories do
    resources :walkthroughs do
      resources :steps
    end
  end
end


end
