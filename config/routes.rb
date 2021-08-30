Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "tacos#index"
  resources :tacos
  
  get "/sale", to: "tacos#prices"
  get "/fish", to: "tacos#fish"
end
