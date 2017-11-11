class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.string :city
      t.string :state
      t.string :address
      t.string :country
      t.integer :zip
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
