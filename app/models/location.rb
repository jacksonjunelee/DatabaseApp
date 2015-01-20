class Location < ActiveRecord::Base
  has_many :branches, class_name: "Location", foreign_key: "headquarter_id"
  belongs_to :headquarter, class_name: "Location"
  has_many :users
end
