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
