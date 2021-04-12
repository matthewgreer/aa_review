require 'byebug'


class OrdersController < ApplicationController

  def show
    @order = Order.find(params[:id])
    render :show
  end

  def new
    @min_date = (Date.current + 7).to_formatted_s(:db)
    @order = Order.new
    render :new
  end

  def create
    
    needed_date_strings = order_params[:date_needed].split('-')
    needed_date_ints = needed_date_strings.map {|el| el.to_i}
    needed_date = Date.new(*needed_date_ints)
    today = Date.current
    
    if (needed_date - today).to_i >= 7
      @order = Order.new(order_params)
      if @order.save
        redirect_to order_url(@order)
      else
        flash.now[:errors] = @order.errors.full_messages
        render :new
      end
    else
      flash.now[:errors] = ['Date must be 7 or more days from today.']
    end
  end

  private

  def order_params
    params.require(:order).permit(
      :quantity, :date_needed, :color, :order_type
    )
  end

end
