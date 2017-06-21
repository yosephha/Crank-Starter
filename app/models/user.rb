# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :projects,
    foreign_key: :creator_id,
    class_name: :Project

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.has_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    nil
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  private

  def generate_token
    SecureRandom.base64
  end


  def ensure_session_token
    self.session_token ||= generate_token
  end
end
