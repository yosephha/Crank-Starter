# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  website      :string
#  description  :text             not null
#  end_date     :date             not null
#  funding_goal :integer          not null
#  details      :text             not null
#  creator_id   :integer          not null
#  category_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
  # TODO: validate the association category
  validates_presence_of :title, :description, :end_date, :details, :creator
  validates :website, uniqueness: true
  validates :title, uniqueness: { scope: :creator_id }
  validates :funding_goal, numericality: true

  belongs_to :creator, foreign_key: :creator_id, class_name: :User
end
