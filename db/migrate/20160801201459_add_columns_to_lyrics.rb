class AddColumnsToLyrics < ActiveRecord::Migration[5.0]
  def change
    add_column :lyrics, :user_id, :integer
    add_column :lyrics, :title, :text
    add_column :lyrics, :artist, :text
    add_column :lyrics, :lyrics, :text
  end
end
