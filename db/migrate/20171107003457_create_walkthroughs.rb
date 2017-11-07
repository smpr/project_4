class CreateWalkthroughs < ActiveRecord::Migration[5.1]
  def change
    create_table :walkthroughs do |t|
      t.string :name
      t.string :links
      t.string :body
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
