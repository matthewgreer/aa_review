class SessionsController < ApplicationController



  def new
    @session = Session.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][user_name],
      params[:user][user_name]
    )
    if @user.nil?
     flash.now[:errors] = @user.errors.full_messages
     render :new
    else
      login!(@user)
      redirect_to cats_url
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

end
