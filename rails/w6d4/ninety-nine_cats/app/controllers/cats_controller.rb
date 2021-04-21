class CatsController < ApplicationController

  def index
    @kittehs = Cat.all
    render :index
  end

  def show
    @kitteh = Cat.find(params[:id])
    render :show
  end

  def new
    @kitteh = Cat.new
    render :new
  end

  def create
    @new_kitteh = Cat.new(cat_params)
    if @new_kitteh.save
      redirect_to cats_url
    else
      render :new
    end
  end

  def edit
    @kitteh = Cat.find(params[:id])
    render :edit
  end

  def update
    @kitteh = Cat.find(params[:id])
    if @kitteh.update(cat_params)
      redirect_to cat_url(@kitteh)
    else
      render :edit
    end

  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :name, :color, :sex, :description)
  end
end
