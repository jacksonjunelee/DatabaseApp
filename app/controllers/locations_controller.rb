class LocationsController < ApplicationController

  def index
    @locations= current_user.location.branches
    @headquarter = current_user.location
    render json: [@locations,@headquarter]
  end

  def create
    location = Location.create(location_params)
    render json: location
  end

  def registration
  render "users/registrations/branch_selection"
  end


private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarter_id)
  end

end
