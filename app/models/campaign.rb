class Campaign < ApplicationRecord
  belongs_to :user
  has_many :player_characters
end
