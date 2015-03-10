class CreateHypocrites < ActiveRecord::Migration
  def change
    create_table :hypocrites do |t|
      t.string :name
      t.string :current_position
      t.string :image_path
      t.string :descent
      t.string :twitter

      t.timestamps
    end
  end
end