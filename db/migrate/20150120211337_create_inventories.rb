class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :amount_inhouse
      t.integer :amount_sold
      t.float :price

      t.references :product, index: true
      t.references :location, index: true
      t.timestamps
    end
  end
end
