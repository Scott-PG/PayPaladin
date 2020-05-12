# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "admin", email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"

Campaign.create(name: "Shyft", user_id: 1)

p "#{Campaign.count} campaign(s) created"

PlayerCharacter.create(name: "Flux", platinum: 5, gold: 3, electrum: 0, silver: 15, copper: 25 , user_id: 1, campaign_id: 1)
PlayerCharacter.create(name: "Flow", platinum: 5, gold: 3, electrum: 0, silver: 15, copper: 25 , user_id: 1)

p "#{PlayerCharacter.count} player character(s) created"