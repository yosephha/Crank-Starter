# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
# Users
user1 = User.create(username: 'user', password: 'password')
user2 = User.create(username: 'yoseph', password: 'password')
user3 = User.create(username: 'steveJobs', password: 'password')

Category.destroy_all
#categories
art = Category.create(name: 'Art')
game = Category.create(name: 'Game')
music = Category.create(name: 'Music')
tech = Category.create(name: 'Technology')
photography = Category.create(name: 'Photography')

Project.destroy_all
#Projects
p1 = Project.create( title: 'Open a Shop', website: 'www.shop.com',
    description: 'bla bla blabla bla blabla bla blabla bla bla bla blabla blbla
    bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla bla
    bla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla bla
    bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla bl
    bla bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla
    blabla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla
    bla bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla',
    end_date: '07/08/2017',
    funding_goal: '100000', details: 'bla bla bla',
    creator_id: user1.id, category_id: art.id)

p2 = Project.create( title: 'Buy a Lambo', website: 'www.lambo.com',
    description: 'bla bla blabla bla blabla bla blabla bla bla bla blabla blbla
    bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla bla
    bla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla bla
    bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla bl
    bla bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla
    blabla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla
    bla bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla',
    end_date: '07/10/2017',
    funding_goal: '1000000', details: 'bla bla bla',
    creator_id: user1.id, category_id: game.id)

p3 = Project.create( title: 'Go to Paris', website: 'www.paris.com',
    description: 'bla bla bla', end_date: '09/08/2017',
    funding_goal: '20000', details: 'bla bla bla',
    creator_id: user2.id, category_id: music.id)

p4 = Project.create( title: 'Fund a Startup', website: 'www.startup.com',
    description: 'bla bla bla', end_date: '07/08/2017',
    funding_goal: '40000000', details: 'bla bla bla',
    creator_id: user3.id, category_id: photography.id)

Reward.destroy_all
# Rewards
r1 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p1.id)
r2 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p2.id)
r3 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p1.id)
r4 = Reward.create(amount: 10000, title: 'bigg hug',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p4.id)

Contribution.destroy_all
# contributions
c1 = Contribution.create(reward_id: r1.id, backer_id: user1.id, amount: 2)
c2 = Contribution.create(reward_id: r2.id, backer_id: user2.id, amount: 1)
c3 = Contribution.create(reward_id: r3.id, backer_id: user3.id, amount: 5)
