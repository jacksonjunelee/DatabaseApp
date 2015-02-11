require 'rails_helper'

describe Location do

  let(:mundioro) { Location.new( name: "mundioro",
                                  address: "245 W 5th st",
                                  city: "New York",
                                  state: "NY",
                                  zip: 10010,
                                  phone: 3876567890)}
  it "is valid with a name, address, city, state, zip, phone" do
    expect(mundioro).to be_valid
  end

end
