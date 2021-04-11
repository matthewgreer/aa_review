class ChangeOrderColumnTypeToOrderType < ActiveRecord::Migration[5.2]
  def change
    change_table :orders do |t|
       t.rename :type, :order_type
    end
  end
end
