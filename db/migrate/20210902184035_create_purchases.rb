class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :merch, null: false, foreign_key: true
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
