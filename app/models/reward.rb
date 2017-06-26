# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  amount      :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null


class Reward < ApplicationRecord
  validates :amount, numericality: true
  validates :title, :description, :project_id, presence: true

  belongs_to :project
  has_many :contributions
  has_many :backers, through: :contributions, source: :backer
end
