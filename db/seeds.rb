# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
user1 = User.create(username: 'user', password: 'password')
user2 = User.create(username: 'yoseph', password: 'password')
user3 = User.create(username: 'steveJobs', password: 'password')

#categories
art = Category.create(name: 'Art')
game = Category.create(name: 'Game')
music = Category.create(name: 'Music')
tech = Category.create(name: 'Technology')
photography = Category.create(name: 'Photography')

#Projects
Project.create( title: 'open a shop', website: 'www.shop.com',
    description: 'bla bla bla', end_date: '07/08/2017',
    funding_goal: '100000', details: 'bla bla bla',
    creator_id: user1.id, category_id: art.id)

Project.create( title: 'buy a Lambo', website: 'www.lambo.com',
    description: 'bla bla bla', end_date: '07/10/2017',
    funding_goal: '1000000', details: 'bla bla bla',
    creator_id: user1.id, category_id: game.id)

Project.create( title: 'go to paris', website: 'www.paris.com',
    description: 'bla bla bla', end_date: '09/08/2017',
    funding_goal: '20000', details: 'bla bla bla',
    creator_id: user2.id, category_id: music.id)

Project.create( title: 'fund a start up', website: 'www.startup.com',
    description: 'bla bla bla', end_date: '07/08/2017',
    funding_goal: '40000000', details: 'bla bla bla',
    creator_id: user3.id, category_id: photography.id)
