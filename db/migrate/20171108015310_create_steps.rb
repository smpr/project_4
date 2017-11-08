class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title
      t.string :body
      t.string :links
      t.references :walkthrough, foreign_key: true

      t.timestamps
    end
  end
end
