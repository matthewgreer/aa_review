class User < ApplicationRecord

  validates :email, :password_digest, :session_token, null: false
  validates :email, :session_token, uniqueness: true
  validates :password, length:{minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user.is_password?(password)
    user
  end

  def reset_session_token!
    self.session_token = self.generate_session_token
    self.save!
    self.session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(64)
  end

  private

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end
  
end
