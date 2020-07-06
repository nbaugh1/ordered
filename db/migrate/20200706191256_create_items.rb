# frozen_string_literal: true

class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :allergies
      t.string :item_type

      t.timestamps
    end
  end
end
