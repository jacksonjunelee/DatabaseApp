class LocationsController < ApplicationController

  def index
    @locations= current_user.location.branches
    @headquarter = current_user.location
    render json: [@locations,@headquarter]
  end

  def show
    @location = Location.find(params[:id])
    @inventories = @location.inventories.map do |inventory|
      inventory.as_json(include: :product)
    end
    render json: [@location,@inventories]
  end

  def create
    location = Location.create(location_params)
    render json: location
  end

  # def registration
  #   render "users/registrations/branch_selection"
  # end

  def company_registration
    @location = Location.new
  end

  def company_create
    location = Location.create(location_params)
    current_user.location_id = location.id
    if current_user.save
      redirect_to root_path
      # after_sign_in_path_for(current_user)
    else
      # render "users/registrations/new_company"
      company_registration_locations_path(current_user)
    end
  end


private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarter_id, :phone)
  end

end
