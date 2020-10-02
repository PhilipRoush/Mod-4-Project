Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :ratings
  resources :movies
  resources :comments
end
