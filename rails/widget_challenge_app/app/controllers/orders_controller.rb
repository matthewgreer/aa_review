class OrdersController < ApplicationController
  def show
    @order = Order.find(params[:id])
    render :show
  end

  def new
    @order = Order.new
    render :new
  end

  def create
    if order_params[:order[:date_needed]].is_valid_date?
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
