Rails.application.routes.draw do
  get 'calculators/nutrition'

  get 'calculators/workout'

  get 'calculators/landing_page'

  #Root Page of Site
  root 'calculators#landing_page'
end
