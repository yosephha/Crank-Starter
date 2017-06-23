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

ActiveRecord::Schema.define(version: 20170623025828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       default: "none"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["name"], name: "index_categories_on_name", using: :btree
  end

  create_table "contributions", force: :cascade do |t|
    t.integer  "reward_id",  null: false
    t.integer  "backer_id",  null: false
    t.integer  "amount",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",                    null: false
    t.string   "website"
    t.text     "description",              null: false
    t.date     "end_date",                 null: false
    t.integer  "funding_goal",             null: false
    t.text     "details",                  null: false
    t.integer  "creator_id",               null: false
    t.integer  "category_id",              null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "project_img_file_name"
    t.string   "project_img_content_type"
    t.integer  "project_img_file_size"
    t.datetime "project_img_updated_at"
    t.index ["category_id"], name: "index_projects_on_category_id", using: :btree
    t.index ["creator_id"], name: "index_projects_on_creator_id", using: :btree
    t.index ["title", "creator_id"], name: "index_projects_on_title_and_creator_id", unique: true, using: :btree
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "project_id",  null: false
    t.integer  "amount",      null: false
    t.string   "title",       null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["project_id"], name: "index_rewards_on_project_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
