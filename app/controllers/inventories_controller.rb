class InventoriesController < ApplicationController

  def index
    @inventories =Inventory.all
    render json: @inventories

    #   @locations= Location.where("headquarters_id =18")
    #   @headquarter = Location.where("id=18")
    #   render json: [@locations,@headquarter]
  end

  def show
    @inventory = Inventory.find(params[:id])
    render json: @location
  end


  private

  # def inventory_params
  #   params.require(:location).permit(:name, :address, :city, :state, :zip, :headquarters_id)
  # end

end
