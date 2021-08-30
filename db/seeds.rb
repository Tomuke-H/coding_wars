# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Taco.destroy_all

Taco.create({id:1, name:'chicken', price:20, about:'Yummy'})

Taco.create({id:2, name:'carne asada', price:18, about:'Tasty'})

Taco.create({id:3, name:'fish', price:30, about:'So good'})