# frozen_string_literal: true

class MenuItem < ApplicationRecord
  belongs_to :menu
  belongs_to :item
end
