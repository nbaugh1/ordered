# frozen_string_literal: true

class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.belongs_to :menu, index: true
      t.belongs_to :item, index: true
    end
  end
end
