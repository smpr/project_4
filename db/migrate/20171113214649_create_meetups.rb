class CreateMeetups < ActiveRecord::Migration[5.1]
  def change
    create_table :meetups do |t|
      t.string :city
      t.string :country
      t.integer :identification
      t.string :name
      t.string :link
      t.string :description
      t.float :lat
      t.float :lon
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
