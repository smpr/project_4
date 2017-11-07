class AddWalkthroughToSteps < ActiveRecord::Migration[5.1]
  def change
    add_reference :steps, :walkthroughs, foreign_key: true
  end
end
