class CreateSupporters < ActiveRecord::Migration[6.1]
  def change
    create_table :supporters do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :merch, null: false, foreign_key: true
      t.string :name
      t.integer :value

      t.timestamps
    end
  end
end
