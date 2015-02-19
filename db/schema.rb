# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150211215022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "histories", force: true do |t|
    t.string   "name"
    t.string   "product_name"
    t.integer  "amount_inhouse"
    t.integer  "amount_sold"
    t.float    "price"
    t.integer  "headquarter_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "histories", ["headquarter_id"], name: "index_histories_on_headquarter_id", using: :btree

  create_table "inventories", force: true do |t|
    t.integer  "amount_inhouse"
    t.integer  "amount_sold"
    t.float    "price"
    t.integer  "product_id"
    t.integer  "location_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "inventories", ["location_id"], name: "index_inventories_on_location_id", using: :btree
  add_index "inventories", ["product_id"], name: "index_inventories_on_product_id", using: :btree

  create_table "locations", force: true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.integer  "phone"
    t.integer  "headquarter_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "locations", ["headquarter_id"], name: "index_locations_on_headquarter_id", using: :btree

  create_table "products", force: true do |t|
    t.string   "product_name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "description"
  end

  create_table "users", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "position"
    t.string   "company"
    t.integer  "location_id"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["location_id"], name: "index_users_on_location_id", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
