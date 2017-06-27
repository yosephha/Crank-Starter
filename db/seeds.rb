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
user2 = User.create(username: 'yoseph', password: '123456')
user3 = User.create(username: 'steveJobs', password: '123password')
user4 = User.create(username: 'bob', password: 'dontusepassword')
user5 = User.create(username: 'billGates', password: 'passwordisabadpassword')
user6 = User.create(username: 'elon', password: 'password')
user7 = User.create(username: 'potter', password: '12345password')

Category.destroy_all
#categories
art = Category.create(name: 'Art')
autos = Category.create(name: 'Autos')
entertainment = Category.create(name: 'Entertainment')
food = Category.create(name: 'Food')
music = Category.create(name: 'Music')
game = Category.create(name: 'Game')
photography = Category.create(name: 'Photography')
productivity = Category.create(name: 'Productivity')
sports = Category.create(name: 'Sports')
tech = Category.create(name: 'Technology')

Project.destroy_all
#Projects
p1 = Project.create(
    title: 'Panobook: A Notebook for Your Desk',
    website: 'www.shop.com',
    description: "A panoramic notebook for your desk, and eventually, your shelf.
                  Made of quality materials and thoughtful details.",
    end_date: '07/08/2017',
    funding_goal: 20000,
    details: "Hey Kickstarter! We are back with a new project: Panobook, a notebook
            for your desk, and eventually, your shelf. Here is Panobook, in a nutshell:
            The unique panoramic format (160 mm x 288 mm) is designed to sit nicely on your desk, either in front of, behind, to next to you keyboard.
            Each page contains a subtle dot grid, with guide markers to help with layout.
            We really sweated the details. All of the materials have a premium feel and are very nice.
            Panobooks are designed to be kept. Put it in the included slip case, annotate it if you want, and line a bunch up on the shelf.
            Keep scrolling to learn more! ",
    creator_id: user1.id,
    category_id: productivity.id,
    project_img: "https://cdn.pixabay.com/photo/2017/04/19/13/17/computer-2242266_1280.jpg"
    )

  p2 = Project.create(
    title: 'Buy Something nice', website: 'www.lambo.com',
    description: 'bla bla bla',
    end_date: '07/10/2017',
    funding_goal: 1000000, details: 'bla bla blabla bla blabla bla blabla bla bla bla blabla blbla
    bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla bla
    bla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla bla
    bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla bl
    bla bla blabla bla blabla bla blabla bla bla bla blabla blbla bla blabla bla
    blabla bla blabla bla bla bla blabla blbla bla blabla bla blabla bla blabla
    bla bla bla blabla blbla bla blabla bla blabla bla blabla bla bla bla blabla',
    creator_id: user5.id,
    category_id: food.id,
    project_img: "http://www.adidas.com/com/apps/bmje17so/vp_assets/images/350-v2/white-black/adidas_YEEZY_350_V2_WB_Lateral_Left.jpg?env=&v=20.07")


  p3 = Project.create(
    title: 'Go to Paris', website: 'www.paris.com',
    description: 'bla bla bla', end_date: '09/08/2017',
    funding_goal: '20000', details: 'bla bla bla',
    creator_id: user6.id, category_id: music.id,
    project_img: "http://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg")

  p4 = Project.create(
    title: 'Fund a Startup', website: 'www.startup.com',
    description: 'bla bla bla', end_date: '07/08/2017',
    funding_goal: '40000000', details: 'bla bla bla',
    creator_id: user7.id, category_id: photography.id)

p5 = Project.create(
    title: 'Rise of Tribes',
    website: 'www.ribes.com',
    description: "Lead your prehistoric Tribe to victory through discovery,
                  achievements, civilization and overcoming the odds. Choose how you Rise.",
    end_date: '19/09/2017',
    funding_goal: 10000,
    details: "Hey Kickstarter! We are back with a new project: Panobook, a notebook
            for your desk, and eventually, your shelf. Here is Panobook, in a nutshell:
            The unique panoramic format (160 mm x 288 mm) is designed to sit nicely on your desk, either in front of, behind, to next to you keyboard.
            Each page contains a subtle dot grid, with guide markers to help with layout.
            We really sweated the details. All of the materials have a premium feel and are very nice.
            Panobooks are designed to be kept. Put it in the included slip case, annotate it if you want, and line a bunch up on the shelf.
            Keep scrolling to learn more! ",
    creator_id: user2.id,
    category_id: game.id,
    project_img: "https://i2.wp.com/mmoexaminer.com/wp-content/uploads/2016/12/world_of_warcraft_legion_release_time_eu_australia_countdown_launch.jpg?w=1280")

p6 = Project.create(
    title: 'Lifepack HUSTLE: backpack & shoulder bag, solar tech + lock',
    website: 'www.lifepack.com',
    description: "The best backpacks & shoulder bags for your daily hustle.
                  The newest solar tech and patented anti-theft lock.",
    end_date: '19/12/2017',
    funding_goal: 150000,
    details: "Welcome to Lifepack: The Hustle Collection. In 2016 we launched Lifepack on
              Kickstarter and raised $613,917 USD. To date we’ve shipped over 15,000 bags
              all over the world. We’ve listened to your feedback, and now we’re back - with
              The Hustle Collection.If you’re grinding to get ahead: these bags have
              been designed to help you work smarter and harder.",
    creator_id: user3.id,
    category_id: tech.id,
    project_img: "https://ksr-ugc.imgix.net/assets/017/218/982/f8d6180d9e226c6bb00bc4ad8345f858_original.jpg?w=680&fit=max&v=1498166630&auto=format&q=92&s=11415ac5d683cd5ea22224cf5d382be4")


Reward.destroy_all
# Rewards
# FORMAT reward# project#
r01 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p1.id)
r02 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p2.id)
r03 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p3.id)
r04 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p4.id)
r05 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p5.id)
r06 = Reward.create(amount: 10, title: 'pizza Lunch',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p6.id)

r11 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p1.id)
r12 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p2.id)
r13 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p3.id)
r14 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p4.id)
r15 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p5.id)
r16 = Reward.create(amount: 100, title: 'Dinner',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p6.id)

r21 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p1.id)
r22 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p2.id)
r23 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p3.id)
r24 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p4.id)
r25 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p5.id)
r26 = Reward.create(amount: 1000, title: 'boat ride',
     description: 'bla...bla..bla...bla...bla..bl',
     project_id: p6.id)

# contributions
Contribution.destroy_all

c1 = Contribution.create(reward_id: r01.id, backer_id: user1.id, amount: 50)
c2 = Contribution.create(reward_id: r01.id, backer_id: user2.id, amount: 50)
c3 = Contribution.create(reward_id: r01.id, backer_id: user3.id, amount: 50)
c4 = Contribution.create(reward_id: r01.id, backer_id: user4.id, amount: 50)
#2000
c5 = Contribution.create(reward_id: r21.id, backer_id: user4.id, amount: 10)
c6 = Contribution.create(reward_id: r21.id, backer_id: user3.id, amount: 10)
c7 = Contribution.create(reward_id: r21.id, backer_id: user2.id, amount: 10)
c8 = Contribution.create(reward_id: r21.id, backer_id: user1.id, amount: 10)
c9 = Contribution.create(reward_id: r21.id, backer_id: user5.id, amount: 10)

c10 = Contribution.create(reward_id: r12.id, backer_id: user3.id, amount: 5)
c11 = Contribution.create(reward_id: r12.id, backer_id: user4.id, amount: 5)
c12 = Contribution.create(reward_id: r12.id, backer_id: user5.id, amount: 5)
c13 = Contribution.create(reward_id: r12.id, backer_id: user1.id, amount: 5)
c14 = Contribution.create(reward_id: r12.id, backer_id: user1.id, amount: 5)
