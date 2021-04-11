Rails.application.routes.draw do

  root to: redirect('/orders/new')
  
  resources :orders, only:[:show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
