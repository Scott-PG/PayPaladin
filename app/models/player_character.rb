class PlayerCharacter < ApplicationRecord
  belongs_to :user
  belongs_to :campaign, optional: true

  attribute :platinum, :integer, default: 0
  attribute :gold, :integer, default: 0
  attribute :electrum, :integer, default: 0
  attribute :silver, :integer, default: 0
  attribute :copper, :integer, default: 0

  validates :platinum, numericality: { only_integer: true, greater_than_or_equal_to: 0}
  validates :gold, numericality: { only_integer: true, greater_than_or_equal_to: 0}
  validates :electrum, numericality: { only_integer: true, greater_than_or_equal_to: 0}
  validates :silver, numericality: { only_integer: true, greater_than_or_equal_to: 0}
  validates :copper, numericality: { only_integer: true, greater_than_or_equal_to: 0}
end
