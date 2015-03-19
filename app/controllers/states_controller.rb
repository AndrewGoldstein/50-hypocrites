class StatesController < ApplicationController

private
  def state_params
    require(:state).permit(:name, :boundaries, :state_id)
  end
end
