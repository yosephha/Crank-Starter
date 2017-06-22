# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           default("none")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates_presence_of :name
  validates :name, uniqueness: true
  has_many :projects, foreign_key: :category_id, class_name: :Project
end
