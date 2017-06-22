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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
