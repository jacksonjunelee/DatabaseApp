# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Location.create(name: "MundiOro", address: "540 sw 56st", city: "New York", state: "NY", zip: "92929")
Location.create(name: "CatOro", address: "522 sw 55st", city: "New York", state: "NY", zip: "11111")
Location.create(name: "MewOro", address: "567 sw 56st", city: "New York", state: "NY", zip: "22222")

# id | name | address | city | state | zip | headquarters_id | created_at | updated_at
