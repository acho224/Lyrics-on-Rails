  Rails.application.routes.draw do
  root 'welcome#index'
  resources :lyrics
  post '/save/:artist/:song/:lyrics', to: 'saves#save_lyrics'
  get '/saves' =>'saves#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

