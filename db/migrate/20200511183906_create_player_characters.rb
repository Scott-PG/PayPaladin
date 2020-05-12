class CreatePlayerCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :player_characters do |t|
      t.string :name
      t.integer :platinum
      t.integer :gold
      t.integer :electrum
      t.integer :silver
      t.integer :copper
      t.references :user, null: false, foreign_key: true
      t.references :campaign, foreign_key: true

      t.timestamps
    end
  end
end
