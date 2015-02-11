class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id]).image.url
    render json: @product
  end

  def create
    product = Product.create({product_name: params[:product_name], image: params[:image], description: params[:description]})
    render json: product
  end

  def search
    product_result = Product.where({product_name: params[:query]})
    inventory_result = Inventory.where({product_id: product_result[0].id})
    locations = inventory_result.map do |location|
      location.location
    end
    render json: [product_result,inventory_result,locations]
  end

  # wokring feature, not working
  # def update
  #   product = Product.find(params[:id])
  #   product.update(product_params)
  #   render json: product
  # end

private

  def product_params
    params.require(:product).permit(:product_name, :image, :description)
  end

end
