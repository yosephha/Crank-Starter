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

require 'test_helper'

class ContributionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
