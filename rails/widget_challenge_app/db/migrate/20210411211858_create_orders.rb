class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :identifier
      t.integer, :quantity
      t.date, :date_needed
      t.string, :color
      t.string :type

      t.timestamps
    end
  end
end
