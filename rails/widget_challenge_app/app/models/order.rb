class Order < ApplicationRecord

  validates :quantity, :date_needed, :color, :order_type, presence: true
  validates :identifier, presence: true, uniqueness: true
  validates :color, inclusion: {in: ['red', 'yellow', 'blue']}
  validates :order_type, inclusion: {in: ['Widget', 'Widget Pro', 'Widget Xtreme']}
  
  after_initialize :set_unique_identifier

  def set_unique_identifier
    self.identifier ||= SecureRandom::urlsafe_base64(6).upcase
  end
  
end
