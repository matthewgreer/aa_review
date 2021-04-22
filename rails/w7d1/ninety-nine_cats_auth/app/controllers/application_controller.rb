class ApplicationController < ActionController::Base

  # makes :current_user available in views
  helper_method :current_user


  private
  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in!
    redirect_to new_session_url if current_user.nil?
  end

  def ensure_not_logged_in!
    redirect_to cats_url if current_user
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
