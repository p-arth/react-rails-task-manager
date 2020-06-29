Rails.application.routes.draw do
  resources :tasks
  delete 'tasks', to: 'tasks#delete_done'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
