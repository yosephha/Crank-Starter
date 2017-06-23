class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :rewards, :project_id, unique: true
  end
end
