require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  # .freeze renders a constant immutable.
  # %w creates array of strings out of the delimited strings
  CAT_COLORS = %w(black white orange brown).freeze

  validates :color, inclusion: CAT_COLORS
  validates :sex, inclusion: %w(M F)
  validates :birth_date, :color, :name, :sex, presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :user_id

  # Remember, has_many is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  has_many :rental_requests,
    class_name: :CatRentalRequest,
    dependent: :destroy

  def age
    time_ago_in_words(birth_date)
  end
end
