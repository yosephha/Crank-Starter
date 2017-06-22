class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :name, :default => "none"
      t.timestamps
    end

    add_index :categories, :name
  end
end
