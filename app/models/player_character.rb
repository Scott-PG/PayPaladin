class PlayerCharacter < ApplicationRecord
  belongs_to :user
  belongs_to :campaign, optional: true

  attribute :platinum, :integer, default: 0
  attribute :gold, :integer, default: 0
  attribute :electrum, :integer, default: 0
  attribute :silver, :integer, default: 0
  attribute :copper, :integer, default: 0
end
