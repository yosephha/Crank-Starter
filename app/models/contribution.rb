# == Schema Information
#
# Table name: contributions
#
#  id         :integer          not null, primary key
#  reward_id  :integer          not null
#  backer_id  :integer          not null
#  amount     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contribution < ApplicationRecord
  validates :amount, presence: true

  belongs_to :reward
  belongs_to :backer, foreign_key: :backer_id, class_name: :User
end
