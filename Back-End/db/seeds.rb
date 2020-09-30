# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create(image_url: "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "The film reboots the Batman film series, telling the origin story of Bruce Wayne from the death of his parents to his journey to become Batman and his fight to stop Ra's al Ghul and the Scarecrow from plunging Gotham City into chaos.", director: "Christopher Nolan", rating: "9", genre: "Action", trailer: "1")
Movie.create(image_url: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family. Based on Marvel Comics superhero character, this is a story of Peter Parker who is a nerdy high-schooler.", director: "Sam Raimi", rating: "8", genre: "Action", trailer: "2")
Movie.create(image_url: "https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "Star Wars", director: "George Lucas", rating: "7", genre: "Sci-Fi", trailer: "3")
Movie.create(image_url: "https://images.unsplash.com/photo-1587176296591-94fae5d320bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "A young girl realises that she has to stay awake at any cost to avoid the clawed killer who is butchering her friends one by one in their dreams.", director: "Wes Craven", rating: "7.5", genre: "horror", trailer: "4")
Movie.create(image_url: "https://images.unsplash.com/photo-1550747545-c896b5f89ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80", description: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik.", director: "Jeff Fowler", rating: "6.5", genre: "Comedy", trailer: "5")

