# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'action_view'


class Cat < ApplicationRecord
  
  VALID_COLORS = ['black', 'brown', 'calico', 'gray/blue', 'tabby', 'tortoiseshell', 'tuxedo', 'white'].freeze
  
  extend ActionView::Helpers::DateHelper
  
  validates :birth_date, presence: true
  validates :color, presence: true, inclusion: VALID_COLORS
  validates :name, presence: true, uniqueness: true
  # message: {"Whoa, %{value} is already in our system. Please choose a unique name for your %{value}"}
  validates :sex, presence: true, length: { is: 1 }, inclusion: { in: ["M", "F"] }
  # message: {"Sorry. Our feline overlords demand a choice between 'M' and 'F'."}
  validates :description, presence: true
  
  

  def age
    time_ago_in_words(:birth_date)
  end

end
