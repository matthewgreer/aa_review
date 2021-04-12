class Order < ApplicationRecord

  validates :quantity, :date_needed, :color, :type, presence: true
  validates :identifier, presence: true, uniqueness: true
  validates :color, inclusion: {in: ['red', 'yellow', 'blue']}
  validates :order_type, inclusion: {in: ['Widget', 'Widget Pro', 'Widget Xtreme']}
  
  after_initialize :set_unique_identifier

  def set_unique_identifier
    self.identifier = SecureRandom::urlsafe_base64(10)
  end
  
  def is_valid_date?(date)
    today = Date.current
    (date - today).to_i >= 7
  end
  
end
