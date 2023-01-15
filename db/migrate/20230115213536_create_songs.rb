class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
    t.string :song_name
    t.integer :songwriter_id
    t.integer :album_id
    end
  end
end
