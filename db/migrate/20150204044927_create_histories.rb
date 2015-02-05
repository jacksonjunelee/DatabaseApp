class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.string :name
      t.string :product_name
      t.integer :amount_inhouse
      t.integer :amount_sold
      t.float :price
      t.references :headquarter, index: true

      t.timestamps
    end
  end
end
