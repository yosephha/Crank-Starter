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
user2 = User.create(username: 'Yoseph', password: '123456')
user3 = User.create(username: 'SteveJobs', password: '123password')
user4 = User.create(username: 'Bob', password: 'dontusepassword')
user5 = User.create(username: 'BillGates', password: 'passwordisabadpassword')
user6 = User.create(username: 'Elon', password: 'password')
user7 = User.create(username: 'Potter', password: '12345password')

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
    details: "Hey crankstarter! We are back with a new project: Panobook, a notebook
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
    title: "Minimalist sneakers made with the finest materials | Lenger",
    website: 'www.yeeze.com',
    description: 'Rethinking luxury sneakers with a meticulous design at a fair price',
    end_date: '07/10/2017',
    funding_goal: 1000000,
    details: "We're launching a pair of minimalist sneakers made in Portugal with Italian
      premium materials. Inspired by scandinavian fashion, stitches are hidden to the maximum
      and the same monochromatic color is used for leather & sole. Last but not least, by offering
      them via pre-orders we're able to cut logistic costs and retailer margins to offer it at a
      third of its retail price!",
    creator_id: user5.id,
    category_id: art.id,
    project_img: "http://www.adidas.com/com/apps/bmje17so/vp_assets/images/350-v2/white-black/adidas_YEEZY_350_V2_WB_Lateral_Left.jpg?env=&v=20.07")


  p3 = Project.create(
    title: "LINKA : World's First Auto-Unlocking Smart Bike Lock", website: 'www.paris.com',
    description: 'Lock Smarter Not Harder with LINKA. Our bike lock features Tamper Alerts, Auto-Unlock, Built-in Siren, Keyless Access & more!',
    end_date: '09/08/2017',
    funding_goal: 20000,
    details: "Our team came together with one clear mission: to find a way to eliminate
      the opportunity for bikes to be stolen. The purpose behind our mission is to provide
      a sense of security to bikers and encourage cycling as a lifestyle. How is LINKA unique?
      We discovered that 85% of bikes that are stolen are ridden away inconspicuously. By focusing
      mainly on immobilizing the wheel and locking it to the frame, we can seriously reduce the risk
      of a bike getting stolen, as it become a lot more suspicious to carry an alarming bike!",

    creator_id: user6.id, category_id: autos.id,
    project_img: "https://heavyeditorial.files.wordpress.com/2017/02/tigr-mini-lightweight-titanium-bicycle-lock1.jpg?quality=65&strip=all")

  p4 = Project.create(
    title: "Tiger + Man's Debut Music Videos", website: 'www.startup.com',
    description: 'iger + Man are collaborating with some incredible visual artists and directors to create their first two music videos and photo shoot!',
    end_date: '07/08/2017',
    funding_goal: '450000',
    details: "The creation of Tiger + Man is a collaboration among artists, musicians,
      photographers, and cinematographers. Tiger + Man has had the honor of working with
      truly incredible people during the production of their debut EP. Now that the music
      is in post-production, it's time to put together the visual representation of
      Tiger + Man in photos and videos. Tiger + Man has entered pre-production for a
      photo shoot and two video shoots with a dream0team visual artists. You can read
      about each of these below!",
    creator_id: user7.id, category_id: photography.id)

p5 = Project.create(
    title: 'Rise of Tribes',
    website: 'www.ribes.com',
    description: "Lead your prehistoric Tribe to victory through discovery,
                  achievements, civilization and overcoming the odds. Choose how you Rise.",
    end_date: '19/09/2017',
    funding_goal: 10000,
    details: "Hey crankstarter! We are back with a new project: Panobook, a notebook
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
              crankstarter and raised $613,917 USD. To date we’ve shipped over 15,000 bags
              all over the world. We’ve listened to your feedback, and now we’re back - with
              The Hustle Collection.If you’re grinding to get ahead: these bags have
              been designed to help you work smarter and harder.",
    creator_id: user3.id,
    category_id: tech.id,
    project_img: "https://ksr-ugc.imgix.net/assets/017/218/982/f8d6180d9e226c6bb00bc4ad8345f858_original.jpg?w=680&fit=max&v=1498166630&auto=format&q=92&s=11415ac5d683cd5ea22224cf5d382be4")

p7 = Project.create(
    title: 'Sonnet: Mobile Communication Without Cellular Reception',
    website: 'www.anchor.com',
    description: "Send instant messages, images, and GPS locations on your smartphone without cellular coverage, satellite, or Internet access.",
    end_date: '08/08/2017',
    funding_goal: 17000,
    details: "Sonnet brings the long-range wireless communication capability of the 2-way radio (walkie-talkie) to the smartphone. It enables
              device-to-device data transfer through low-power, long-range radio frequencies, thus removing smartphones’ dependence on cellular grid and
              other networking infrastructures. Sonnet connects wirelessly to any smartphone, which can then send data up to several miles away to other
              Sonnet-equipped smartphones.",
    creator_id: user7.id,
    category_id: tech.id,
    project_img: "https://i0.wp.com/www.lazyfeed.com/wp-content/uploads/2017/01/banner11.jpg?resize=1024%2C288")

p8 = Project.create(
    title: 'Rise Grand Rapids // Brick & Mortar Shop',
    website: 'www.grandrapids.com',
    description: "From home baking to a church kitchen, pop ups to wholesalers, Rise is on the move and we need your help to open a brick & mortar shop!",
    end_date: '07/18/2017',
    funding_goal:  55000 ,
    details: "Rise Grand Rapids is a gluten free, vegan, and soy free bakery based in Grand Rapids, MI. We believe that everyone should be able to partake
      in life's greatest celebrations without worrying about their dietary restrictions or preferences. Here at Rise, we know what it feels like to be left
      out during a birthday party or family event, but we are here to tell you: come as you are, have a seat at the table. Rise began in a one bedroom apartment
      on the Westside of Grand Rapids four years ago. At first, we baked for neighborhood potlucks and friends' weddings, but our business quickly grew and soon
      we were invited to local pop-up sales. At these pop-ups, we debuted our allergy-conscious baked goods which were sold out in a matter of minutes. The demand
      for our product grew, and in April of 2016 we starting producing our baked goods in our church's commercial kitchen. Baking in a commercial kitchen allowed
      for our baked goods to be sold at restaurants and coffee shops in downtown Grand Rapids. Since then, we have accumulated nine wholesale vendors where our
      customers can buy our baked goods. We fulfill small custom orders for events such as birthday parties and baby showers, as well as larger custom orders
      for special occasions such as weddings or corporate events. The retail side of our business has been fantastic but also challenging, seeing as though we
      don't have our own retail storefront. ",
    creator_id: user6.id,
    category_id: food.id,
    project_img: "http://bsnscb.com/data/out/68/38899796-fantastic-donut-wallpapers.jpg")

p9 = Project.create(
    title: 'Hedges n highways by Official Godson',
    website: 'www.hedgess.com',
    description: "A hip hop Music album about positive messages and encouragement! The single hometown is on YouTube",
    end_date: '07/08/2017',
    funding_goal: 1500  ,
    details: "'THEE OFFICIAL GODSON' Born ANTHONY DENNIS, A Proud Alumni Of RIVERSIDE HIGH SCHOOL, And Former 'NICKEL CITY KINGS' Semi-Pro FOOTBALL
    PLAYER...CAN ANY GOOD THING COME OUT OF BUFFALO, NEW YORK???!!! He Is A Young Man Motivated To Reach And Empower Urban Youth And Encourage People
    Living In Urban Communities Like He Grew Up In All Over The World Especially In His hometown Of B-LO, NEW YORK Which Will Always Be A Place Very
    Dear To His Heart. The Very Fact That 'GODSON' Through The GRACE & POWER Of ALMIGHTY GOD And FAITH In JESUS CHRIST Was Empowered To Overcome Great
    Obstacles And Childhood Challenges To Become A Great Inspiration And Encouragement To Urban Youth And Urban Community People EVERYWHERE!!! THEE
    'OFFICIAL GODSON' Is A Positive 'HIP HOP' artist that traveled on the road doing tours,outreach fundraisers etc with national acts across the country.
    THEE 'OFFICIAL GODSON' has shared the stage with artist from local acts in his home town to national acts in other cites and states from legendary
    SPARKY D,canton jones,and other famous groups of today.hes headlined for several concerts across the country(usa) and clubs making an impact and
    spreading positive music in people ears and hearts.",
    creator_id: user4.id,
    category_id: music.id,
    project_img: "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/3001816_1422037466.9019.jpg")

p10 = Project.create(
    title: "crankstarter Gold: VIDERE 35mm DIY pinhole camera kit",
    website: 'www.coldgess.com',
    description: "Put down your phone and reconnect with the physical experience of analogue photography with the VIDERE 35mm pinhole camera kit!",
    end_date: '07/08/2017',
    funding_goal: 15000  ,
    details: "A pinhole camera is a simple camera that uses a single small aperture - a pinhole - instead of a lens. Dating back to the 1880s,
        the simple and ingenious process of pinhole photography involves exposure of film using light filtered through a small hole in a
        light-proof box. light passes through this hole, an image is exposed onto the film loaded inside the camera. Exposure times are
        typically longer than with a normal lensed camera, due to the aperture being so much smaller. This means that pinhole cameras can
        typically take anywhere from a few seconds to a couple of hours to expose a photograph. Because of these long exposures the shutter
        is usually manually operated. It strips complex photographic concepts down to their basic foundation: Light. How much to let in,
        and for how long!",
    creator_id: user4.id,
    category_id: photography.id,
    project_img: "http://camy.premiumcoding.com/wp-content/uploads/2012/03/old-school-camera.jpg")


Reward.destroy_all
# Rewards
# FORMAT reward# project#
r01 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p1.id)

r02 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p2.id)

r03 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p3.id)

r04 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p4.id)

r05 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p5.id)

r06 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p6.id)

r07 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p7.id)

r08 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p8.id)

r09 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p9.id)

r10 = Reward.create(amount: 10, title: 'Contactless Sleep Tracker Basic',
     description: 'Save: $50 (Retail: $129) 1 x Circadia Sleep Tracker + iOS or Android Mobile app',
     project_id: p10.id)

# reward 2

r11 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p1.id)
r12 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p2.id)
r13 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p3.id)
r14 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p4.id)
r15 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p5.id)
r16 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p6.id)
r17 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: 'A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.',
     project_id: p7.id)
r18 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: "A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.",
     project_id: p8.id)
r19 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: "A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.",
     project_id: p9.id)
r110 = Reward.create(amount: 100, title: 'Personalised Storybook',
     description: "A beautifully printed storybook with your child as an illustrated
        heroine/hero in their own crankstarter-exclusive adventure. A unique, tangible
        gift that reads well even without having a Cubetto Playset.",
     project_id: p10.id)



r21 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
     description: "You get Cubetto (With $30 off our retail price). A new learning
     toy that makes coding tangible, fun and age appropriate for a new generation
     of little coders. It's powered by a Montessori approved coding language you
     can touch, inspired by the LOGO Turtles of yesteryears, and it works without
     the need for screens or literacy!",
     project_id: p1.id)
r22 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p2.id)

r23 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p3.id)

r24 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p4.id)

r25 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p5.id)

r26 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p6.id)

r27 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p7.id)

r28 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p8.id)

r29 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p9.id)

r210 = Reward.create(amount: 1000, title: 'GET CUBETTO (Early Bird)',
    description: "You get Cubetto (With $30 off our retail price). A new learning
    toy that makes coding tangible, fun and age appropriate for a new generation
    of little coders. It's powered by a Montessori approved coding language you
    can touch, inspired by the LOGO Turtles of yesteryears, and it works without
    the need for screens or literacy!",
    project_id: p10.id)

# contributions
Contribution.destroy_all

c1 = Contribution.create(reward_id: r01.id, backer_id: user1.id, amount: 500)
c2 = Contribution.create(reward_id: r01.id, backer_id: user2.id, amount: 500)
c3 = Contribution.create(reward_id: r01.id, backer_id: user3.id, amount: 500)
c4 = Contribution.create(reward_id: r01.id, backer_id: user4.id, amount: 500)
#2000
c5 = Contribution.create(reward_id: r21.id, backer_id: user4.id, amount: 1500)
c6 = Contribution.create(reward_id: r21.id, backer_id: user3.id, amount: 1500)
c7 = Contribution.create(reward_id: r21.id, backer_id: user2.id, amount: 1500)
c8 = Contribution.create(reward_id: r21.id, backer_id: user1.id, amount: 1500)
c9 = Contribution.create(reward_id: r21.id, backer_id: user5.id, amount: 1500)

c10 = Contribution.create(reward_id: r12.id, backer_id: user3.id, amount: 200)
c11 = Contribution.create(reward_id: r12.id, backer_id: user4.id, amount: 200)
c12 = Contribution.create(reward_id: r12.id, backer_id: user5.id, amount: 200)
c13 = Contribution.create(reward_id: r12.id, backer_id: user1.id, amount: 200)
c14 = Contribution.create(reward_id: r12.id, backer_id: user1.id, amount: 200)
