# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if Rails.env.development?
  AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
end

dinner_menu = Menu.create(name: 'Dinner', menu_type: 'Food', date: 2020 - 0o1 - 0o2)
lunch_menu = Menu.create(name: 'Lunch', menu_type: 'Food', date: 2020 - 0o1 - 0o2)
snack_menu = Menu.create(name: 'Snacks', menu_type: 'Food', date: 2020 - 0o1 - 0o2)
drinks_menu = Menu.create(name: 'Drinks', menu_type: 'Drinks', date: 2020 - 0o1 - 0o2)

pizza = Item.create(name: 'Pizza', description: 'Wheat flour crust, tomato sauce, mozzeralla cheese and pepperonis', price: 20.00, allergies: 'Gluten, Dairy, Meat, Pork', item_type: 'Food')
steak = Item.create(name: 'Steak', description: '16oz Ribeye, USDA Prime', price: 40.00, allergies: 'Meat, Dairy', item_type: 'Food')
hot_dog = Item.create(name: 'Hot Dog', description: 'All beef frank, bun, mustard', price: 2.00, allergies: 'Beef, Gluten')
cheeseburger = Item.create(name: 'Cheeseburger', description: 'Burger, cheese, bun, lettuce, tomato, pickle', price: 10.00, allergies: 'Beef, gluten, dairy')
ice_cream = Item.create(name: 'Ice Cream', description: 'Chocolate Ice Cream, waffle cone, sprikles', price: 3.00, allergies: 'Dairy, Eggs, Gluten')
salad = Item.create(name: 'Salad', description: 'Mixed greens, balsamic vinagrette', price: 8.00, allergies: '')
fries = Item.create(name: 'Fries', description: 'French fried potatoes, thin cut', price: 5.00, allergies: '')
apple = Item.create(name: 'Apple', description: 'One Fuji apple', price: 0.50, allergies: '')
water = Item.create(name: 'Water', description: 'Bottled Water', price: 1.00, allergies: '')
soda = Item.create(name: 'Soda', description: 'CocaCola classic in a can', price: 1.00, allergies: '')
beer = Item.create(name: 'Beer', description: 'Domestic microbrewed IPA', price: 15.00, allergies: '')
wine = Item.create(name: 'Wine', description: 'Red wine (by the glass) from France (Rhone Valley)', price: 15.00, allergies: '')
cocktail = Item.create(name: 'Cocktail', description: 'Old Fashion cocktail made with Knob Creek and turbanato sugar', price: 18.00, allergies: '')
sandwhich = Item.create(name: 'Sandwhich', description: 'Fried chicken thigh on brioche bun with coleslaw', price: 15.00, allergies: '')
tacos = Item.create(name: 'Tacos', description: '3 Tacos with mean and toppings', price: 12.00, allergies: '')

dinner_menu.items.push(pizza, steak, cheeseburger, tacos)
lunch_menu.items.push(salad, hot_dog, tacos, sandwhich)
snack_menu.items.push(ice_cream, fries, apple)
drinks_menu.items.push(water, soda, beer, wine, cocktail)
