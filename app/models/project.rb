# == Schema Information
#
# Table name: projects
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  website                  :string
#  description              :text             not null
#  end_date                 :date             not null
#  funding_goal             :integer          not null
#  details                  :text             not null
#  creator_id               :integer          not null
#  category_id              :integer          not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  project_img_file_name    :string
#  project_img_content_type :string
#  project_img_file_size    :integer
#  project_img_updated_at   :datetime
#

class Project < ApplicationRecord
  validates_presence_of :title, :description, :end_date, :details, :category_id
  validates :website, uniqueness: true
  validates :title, uniqueness: { scope: :creator_id }
  validates :funding_goal, numericality: true

  has_attached_file :project_img, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "tiger.jpg"
  validates_attachment_content_type :project_img, content_type: /\Aimage\/.*\z/

  belongs_to :creator, foreign_key: :creator_id, class_name: :User
  belongs_to :category, foreign_key: :category_id, class_name: :Category

  has_many :rewards, inverse_of: :project

  has_many :contributions, through: :rewards, source: :contributions

  accepts_nested_attributes_for :rewards
end
