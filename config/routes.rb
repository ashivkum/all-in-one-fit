Rails.application.routes.draw do
  get 'static_pages/contact'

  get 'static_pages/about'

  get 'static_pages/routines'

  devise_for :users
  resources :users
  get 'calculators/nutrition'

  get 'calculators/workout'

  get 'calculators/landing_page'

  #Root Page of Site
  root 'calculators#landing_page'
end
