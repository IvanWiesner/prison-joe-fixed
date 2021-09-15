# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Merch.destroy_all
Purchase.destroy_all
Review.destroy_all

puts "start seeding"

User.create(email: "prisonjoe55@gmail.com" , password: "Dropthesoap55")

puts "users made"
puts "merch start"

Merch.create(name: "Soap Hat", image_url: "https://i.imgur.com/c5gTq0k.jpg", price: 27)
Merch.create(name: "Slot 2", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")
Merch.create(name: "Slot 3", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")
Merch.create(name: "Slot 4", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")
Merch.create(name: "Slot 5", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")
Merch.create(name: "Slot 6", image_url: "https://i.imgur.com/0mEPz3C.png", price: "TBD")

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

puts "purchase history start?"

Purchase.create(quantity: 100, price: 27, merch_id: Merch.all.sample.id)