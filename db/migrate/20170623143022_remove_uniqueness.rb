class RemoveUniqueness < ActiveRecord::Migration[5.0]
  def change
    remove_index :rewards, :project_id
    add_index :rewards, :project_id
  end
end
