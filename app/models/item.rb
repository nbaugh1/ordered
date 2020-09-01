# frozen_string_literal: true

class Item < ApplicationRecord
  has_many :menu_items
  has_many :cart_items
  has_many :menus, through: :menu_items
  has_many :carts, through: :cart_items
end
