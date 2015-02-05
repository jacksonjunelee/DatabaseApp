class HistoriesController < ApplicationController

  def index
    @histories = History.all
    render json: @histories
  end

  def create
    history = History.create(history_params)
    render json: history
  end


  private

  def history_params
    params.require(:history).permit(:name,:product_name,:amount_inhouse,:amount_sold,:price,:headquarter_id)
  end

end
