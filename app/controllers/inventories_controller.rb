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

  def create
    inventory = Inventory.create(inventory_params)
    render json: inventory
  end

  private

  def inventory_params
    params.require(:inventory).permit(:amount_inhouse,:amount_sold,:price,:product_id,:location_id)
  end

end
