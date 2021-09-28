# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Merch.destroy_all
Supporter.destroy_all
Review.destroy_all

puts "start seeding"

User.create(email: "prisonjoe55@gmail.com" , password: "Dropthesoap55")

puts "users made"
puts "merch start"

Merch.create(name: "Soap Hat", image_url: "https://i.imgur.com/c5gTq0k.jpg", price: 27)
Merch.create(name: "Slot 2", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")
Merch.create(name: "Slot 3", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")

puts "merch done"

puts "start reviews"

Review.create(comment: "Have you ever thought to yourself: Man, I just can't get pussy. I don't know what I'll do. I fucking hate my life. However, ever since getting this new, HIGH quality EXTRA wide hat, swole is the goal and size is the fucking prize. I have the SOAP that'll make you grope. (my ass) I went from a fucking loser to serving a life sentence, living by the soap, and dropping that soap on purpose to sling some BUSSY. Also, great sizing options. -Noah")
Review.create(comment: "I used to be a beta-male, would always get used by the opposite gender and put in the friend zone. Until I found the PrisonJoe stream. Now I know what it means to be wide and to love the grind. I’ve embraced the prison system, and only drop my soap for the homies. Since getting this hat, babes throw themselves at me. What a guy, what a hat. -Ivan")
Review.create(comment: "I loved my Prison Joe soap hat so much I bought one for my Wife’s boyfriend. - Cody")
Review.create(comment: "Hat made me bald after wearing it for a few hours. - Hunter")
Review.create(comment: "Was hoping this hat would help me clean up my bald head but now I just look worse- Shreddy")
Review.create(comment: "Ordered a hat and just received a bar of soap with a black note saying I smell like shit.- Soccy")
Review.create(comment: "Wanted to buy a soap hat to support my friend and favorite streamer prison joe but all i got was a black hat with a little morph off of treasure planet on it...- DJ ILLENIUM")
Review.create(comment: "That’s a dirty ass hat- Wafcfreak")
Review.create(comment: "I used to get bullied at work for being smaller than the other construction workers. Now I get bullied for wearing this hat thanks Prison Joe!- Ivan")
# Review.create(comment: "", merch_id: Merch.all.sample.id)
# Review.create(comment: "", merch_id: Merch.all.sample.id)


puts "reviews done"

puts "start supporters"

Supporter.create(name:"Money raised for charity", value: 600)
Supporter.create(name:"LastSonido", value: 286)
Supporter.create(name:"Faberator", value: 161)
Supporter.create(name:"Unanemus", value: 160)
Supporter.create(name:"Gage", value: 127)
Supporter.create(name:"Jonak", value: 100)
Supporter.create(name:"SoloConway", value: 100)
Supporter.create(name:"Sainttits", value: 75)
Supporter.create(name:"DarkSheik", value: 60)
Supporter.create(name:"JoshyNR", value: 60)
Supporter.create(name:"MK_Royal", value: 57)
Supporter.create(name:"BEHEMETH", value: 55)
Supporter.create(name:"DD214pls", value: 50)
Supporter.create(name:"BossLofton", value: 50)
Supporter.create(name:"K1lla__Noob", value: 50)
Supporter.create(name:"FluffyPigs", value: 43)
Supporter.create(name:"Angryturkey546", value: 35)
Supporter.create(name:"Dab_saget", value: 35)
Supporter.create(name:"Jelcepas", value: 32)
Supporter.create(name:"FesterFester", value: 21)
Supporter.create(name:"Ni3gtmarez", value: 20)
Supporter.create(name:"Cold Topaz", value: 20)
Supporter.create(name:"Justapenguin00", value: 20)
Supporter.create(name:"Lusky", value: 20)
Supporter.create(name:"Flip", value: 16)
Supporter.create(name:"Narwhal Ninja", value: 16)
Supporter.create(name:"Lusky", value: 15)
Supporter.create(name:"Faloon", value: 15)
Supporter.create(name:"Im_oilfield", value: 15)
Supporter.create(name:"Keibro", value: 15)
Supporter.create(name:"RS-Gonad", value: 13)
Supporter.create(name:"Bibbit7", value: 13)
Supporter.create(name:"Flybye187", value: 11)
Supporter.create(name:"AlylissianRei", value: 10)
Supporter.create(name:"Squidby", value: 10)
Supporter.create(name:"Epic Ninja", value: 8)
Supporter.create(name:"WhenTheyAwaken", value: 5)
Supporter.create(name:"iEmmybear", value: 5)
Supporter.create(name:"Wheremeballs", value: 5)
Supporter.create(name:"Wisest Wizard", value: 5)
Supporter.create(name:"Ivan", value: 5)

puts "supporters end"



puts "purchase history start?"

