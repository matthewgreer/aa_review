class CatsController < ApplicationController

  def index
    @kittehs = Cat.all
    render :index
  end

  def show
    @kitteh = Cat.find(params[:id])
    render :show
  end

  def create
    @new_kitteh = Cat.new(cat_params)
    if @new_kitteh.save
      redirect_to cats_url(@new_kitteh)
    else
      render :new
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :name, :color, :sex, :description)
  end
end
