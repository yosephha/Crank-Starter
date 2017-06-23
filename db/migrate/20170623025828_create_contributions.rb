class CreateContributions < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
        t.integer :reward_id, null: false
        t.integer :backer_id, null: false
        t.integer :amount, null: false
      t.timestamps
    end
  end
end
