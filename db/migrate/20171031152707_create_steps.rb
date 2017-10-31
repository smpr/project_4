class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title
      t.string :body
      t.string :links

      t.timestamps
    end
  end
end
