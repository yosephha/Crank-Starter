class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :website
      t.text :description, null: false
      t.date :end_date, null: false
      t.integer :funding_goal, null: false
      t.text :details, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :projects, :creator_id
    add_index :projects, :category_id
    add_index :projects, [:title, :creator_id], unique: true
  end
end
