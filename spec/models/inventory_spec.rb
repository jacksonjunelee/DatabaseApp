require 'rails_helper'

describe Inventory do

  let(:earring) { Inventory.new( amount_inhouse: 20,
                                amount_sold: 100,
                                price: 1.50,
                                product_id: 1,
                                location_id: 1) }

  it "is valid with a amount_inhouse, amount_sold, price, product_id, location_id" do
    expect(earring).to be_valid
  end

end
