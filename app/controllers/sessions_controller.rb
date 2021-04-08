class SessionsController < ApplicationController
  
  def new
    render :new
  end

  def create
    user = User.find_by(params[:user][:email], params[:user][:password])
    if user
      login!(user)
      redirect_to user_url
    else
      render :new
    end
  end

  def destroy
    self.logout!
    redirect_to new_session_url
  end
end
