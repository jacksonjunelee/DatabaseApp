require 'rails_helper'

describe History do

  let(:history) { History.new( name: "mundioro",
                                product_name: "earring",
                                amount_inhouse: 20,
                                amount_sold: 100,
                                price: 1.50,
                                headquarter_id: 1) }
  it "is valid with a name, product_name, amount_inhouse, amount_sold, price, headquarter_id" do
    expect(history).to be_valid
  end

end
