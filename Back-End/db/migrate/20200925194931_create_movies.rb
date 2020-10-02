class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :backdrop_path
      t.string :title
      t.string :image_url
      t.string :description
      t.string :director
      t.integer :rating
      t.string :genre
      t.string :trailer

      t.timestamps
    end
  end
end
