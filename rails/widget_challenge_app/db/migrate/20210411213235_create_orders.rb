class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :identifier, null: false
      t.integer :quantity, null: false
      t.date :date_needed, null: false
      t.string :color, null: false
      t.string :type, null: false

      t.timestamps
    end
  end
end
