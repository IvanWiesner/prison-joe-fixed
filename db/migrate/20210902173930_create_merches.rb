class CreateMerches < ActiveRecord::Migration[6.1]
  def change
    create_table :merches do |t|
      t.string :name
      t.string :image_url
      t.integer :price

      t.timestamps
    end
  end
end
