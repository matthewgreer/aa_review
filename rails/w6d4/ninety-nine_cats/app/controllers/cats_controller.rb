class CatsController < ApplicationController

  def index
    @kittehs = Cat.all
    render :index
  end

  def show
    @kitteh = Cat.find(params[:id])
    if @kitteh
      render :show
    else
      redirect_to cats_url
    end
  end

  def create
    @new_kitteh = Cat.new(cat_params)
    if @new_kitteh
      render :show
    else
      redirect_to :new
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:id, :birth_date, :name, :color, :sex, :description)
  end
end
