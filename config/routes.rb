Rails.application.routes.draw do
  devise_for :users
  resources :users
  get 'calculators/nutrition'

  get 'calculators/workout'

  get 'calculators/landing_page'

  #Root Page of Site
  root 'calculators#landing_page'
end
