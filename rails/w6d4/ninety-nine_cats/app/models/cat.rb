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

  extend ActionView::Helpers::DateHelper
  
  validates :birth_date, presence: true
  validates :color, presence: true, inclusion: { in: VALID_COLORS }, 
    message: {"Sorry. Our feline overlords' only valid colors are #{VALID_COLORS}."}
  validates :name, presence: true, uniqueness: true
    message: {"Whoa, %{value} is already in our system. Please choose a unique name for your ${value}"}
  validates :sex, presence: true, length: { is: 1 }, inclusion: { in: ["M", "F"]}, 
    message: {"Sorry. Our feline overlords demand a choice between 'M' and 'F'."}
  validates :description, presence: true

  VALID_COLORS = ['i', 'remember', 'nothing', 'from', 'this', 'course', 'fml']

  def age
    time_ago_in_words(:birth_date)
  end

end
