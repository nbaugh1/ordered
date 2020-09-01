# frozen_string_literal: true

class Cart < ApplicationRecord
  belongs_to :user
  has_may :cart_items
  has_many :items, through: :cart_items
end
