Rails.application.routes.draw do
  put 'player_characters/:id/join_campaign', to: 'player_characters#join_campaign'
  put 'player_characters/:id/leave_campaign', to: 'player_characters#leave_campaign'
  put 'player_characters/:id/set_coins', to: 'player_characters#set_coins'
  put 'player_characters/:id/transfer_coins/', to: 'player_characters#transfer_coins'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :campaigns
  resources :player_characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
