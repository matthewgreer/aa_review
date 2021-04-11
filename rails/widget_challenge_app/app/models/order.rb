class Order < ApplicationRecord

  validates :identifier, :quantity, :date_needed, :color, :type, presence: true
  validates :identifier, uniqueness: true
  validates :color, inclusion: {in: ['red', 'yellow', 'blue']}
  validates :type, inclusion: {in: ['Widget', 'Widget Pro', 'Widget Xtreme']}

end
