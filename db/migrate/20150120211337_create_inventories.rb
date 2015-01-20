class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.string :product_name
      t.integer :amount_inhouse
      t.integer :amount_sold
      t.float :price

      t.references :locations, index: true
      t.timestamps
    end
  end
end
