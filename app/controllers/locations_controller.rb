class LocationsController < ApplicationController

  def index
    @locations= current_user.location.branches
    @headquarter = current_user.location
    render json: [@locations,@headquarter]
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end

  def new
    @location = Location.new
    render json: @location
  end

  def create
    @location = Location.new(location_params)
    render json: @location
  end

private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarters_id)
  end

end
