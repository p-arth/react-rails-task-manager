# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating the tasks right now..."

Task.create(title: 'Create a Rails webapp with React frontend', done: false)
Task.create(title: 'Do job interviews for different companines and startups', done: false)
Task.create(title: 'Get a job that will help me learn and hopefully get a fair amount of payment because a gotta live too, amirite?', done: false)
Task.create(title: 'Kill corona virus', done: false)
Task.create(title: 'Take deep breaths to face life', done: false)
Task.create(title: 'Draw some stuff that I wanna draw', done: false)
Task.create(title: 'Study Ruby on Rails', done: true)
Task.create(title: 'Study React', done: true)
Task.create(title: 'Study React Native', done: true)

puts "Done!"