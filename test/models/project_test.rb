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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
