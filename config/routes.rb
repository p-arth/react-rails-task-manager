Rails.application.routes.draw do
  resources :tasks
  # post '/delete_all_done' => 'task#delete_done'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
