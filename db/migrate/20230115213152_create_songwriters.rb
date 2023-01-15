class CreateSongwriters < ActiveRecord::Migration[6.1]
  def change
    create_table :songwriters do |t|
      t.string :name
    end
  end
end
