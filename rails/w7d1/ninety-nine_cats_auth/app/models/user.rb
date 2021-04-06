class User < ApplicationRecord

  # MY FUNNY AUTH MNEMONIC
  # "Author Val attracts readers' passes. After initially ensuring that it is a
  #  pass, she responds with a pass equally. You will find she herself is bi-
  #  sexual, and can immediately reset for another session--whew!--privately
  #  ensuring each session will generate more than token passion."
 
  validates :user_name, :password_digest, :session_token, presence: true
  validates :user_name, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)    
    return nil unless user.is_password?(password)
    user
  end

  def reset_session_token!
    self.session_token = self.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.generate_session_token
    
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(64)
  end
  
end
