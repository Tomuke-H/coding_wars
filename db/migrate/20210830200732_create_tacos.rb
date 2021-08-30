class CreateTacos < ActiveRecord::Migration[6.1]
  def change
    create_table :tacos do |t|
      t.string :name
      t.integer :price
      t.string :about

      t.timestamps
    end
  end
end
