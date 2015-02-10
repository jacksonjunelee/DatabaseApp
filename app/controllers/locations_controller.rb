#add product add feature to location?
class LocationsController < ApplicationController
  before_action :json_authenticate

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
    @images = @location.inventories.map do |inventory|
      inventory.product.image_url
    end
    render json: [@location,@inventories,@images]
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

def json_authenticate
  # Render json containing errors, an array of strings
  # Render with an HTTP status of 401 (unauthorized)
  render json: { errors: ["You must be logged in"] }, status: 401 unless current_user
end

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarter_id, :phone)
  end

end
