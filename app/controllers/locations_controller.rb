class LocationsController < ApplicationController
  before_action :json_authenticate

  def index
    @locations= Location.where("headquarters_id =18")
    @headquarter = Location.where("id=18")
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

def json_authenticate
  # Render json containing errors, an array of strings
  # Render with an HTTP status of 401 (unauthorized)
  render json: { errors: ["You must be logged in"] }, status: 401 unless current_user
end

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarters_id)
  end

end
