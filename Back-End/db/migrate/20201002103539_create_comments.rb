class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :movie_id
      t.string :text
      t.timestamps
    end
  end
end
